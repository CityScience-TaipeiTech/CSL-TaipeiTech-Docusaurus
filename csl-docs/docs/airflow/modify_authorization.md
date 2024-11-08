---
title: Airflow Server資料夾權限設定調整
description: 權限設定跑掉導致DAG無法運作時的調整方式
hide_table_of_contents: false
---

# Airflow Server資料夾權限設定調整
> **Author |** Drew　
> **Date |** 2024-10-28


## 00 錯誤狀態範例
個人在新增 Airflow 轉圖磚功能時，對 `docker-compose.yaml` 與 `.env` 檔案新增了路徑，推測於 GitHub Commit 時有覆寫到原先的資料夾權限，導致 `tdx_vdlive` DAG 報錯無法執行。

![Slack_alert](modify_authorization\image_01.png)

詳細錯誤 log 如下

```
Traceback (most recent call last):
  File "/home/airflow/.local/lib/python3.12/site-packages/airflow/models/taskinstance.py", line 465, in _execute_task
    result = _execute_callable(context=context, **execute_callable_kwargs)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/airflow/.local/lib/python3.12/site-packages/airflow/models/taskinstance.py", line 432, in _execute_callable
    return execute_callable(context=context, **execute_callable_kwargs)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/airflow/.local/lib/python3.12/site-packages/airflow/models/baseoperator.py", line 401, in wrapper
    return func(self, *args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/airflow/.local/lib/python3.12/site-packages/airflow/decorators/base.py", line 265, in execute
    return_value = super().execute(context)
                   ^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/airflow/.local/lib/python3.12/site-packages/airflow/models/baseoperator.py", line 401, in wrapper
    return func(self, *args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/airflow/.local/lib/python3.12/site-packages/airflow/operators/python.py", line 235, in execute
    return_value = self.execute_callable()
                   ^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/airflow/.local/lib/python3.12/site-packages/airflow/operators/python.py", line 252, in execute_callable
    return self.python_callable(*self.op_args, **self.op_kwargs)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/airflow/dags/traffic/tdx_vdlive.py", line 61, in extract_data
    tdx_rawDF = TDX_extract_data(vdlive_url, city)
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/airflow/dags/utils/extractdata.py", line 43, in TDX_extract_data
    tdx.update_token()
  File "/opt/airflow/dags/utils/tdx_coonnect.py", line 51, in update_token
    with open("/opt/airflow/dags/utils/token.json", 'w') as f:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '/opt/airflow/dags/utils/token.json'
```

## 01 解決方法：重新設定資料夾權限 
由於錯誤顯示 Airflow 沒有權限讀取 `token.json` 檔案，需要到 Server 上該資料夾進行調整。

### 1. 連線到 Server (csl@10.100.2.124)並進到對應路徑

路徑: `/Desktop/Docker-Airflow-and-Postgres/airflow/dags/utils`

![folder](modify_authorization\image_02.png)

### 2. 查看現有資料夾權限狀態

指令: `ls -las`

可以看到在修改前的 `api.py` 與 `token.json` 二個檔案的擁有者是 csl ，其他的都是 50000。 50000 是 Airflow 的使用者名稱 (Airflow UID)，因此可知道目前 Airflow 沒有權限讀取到 `token.json` ，也進一步導致這個 tdx 的 token 無法被傳送使用在 DAG 中。

![folder-auth-origin](modify_authorization\image_03.png)


#### Chat-GPT 小補充 

這些數值代表了文件的屬性和信息。從左到右，每一欄的意義如下：

1. **文件大小 (4)** - 表示文件所佔的磁碟塊數。這裡的 `4` 表示文件佔用 4 個 512-byte 的磁碟塊。
  
2. **權限 (`drwxrwxrwx`)** - 表示文件的權限。這裡的權限分為 3 組，每組 3 個字符，分別表示所有者、群組成員和其他用戶的權限。權限字符的含義：
   - `d`：代表目錄（directory）；`-` 代表一般文件。
   - `rwx`：分別表示讀 (`r`)、寫 (`w`)、執行 (`x`) 權限。
   
3. **硬連結數量 (4)** - 表示指向該文件的硬連結數目。這裡的 `4` 表示有 4 個指向該文件或目錄的硬連結。

4. **所有者 (`50000`)** - 表示該文件的所有者用戶 ID，這裡是 `50000`。

5. **群組 (`root`)** - 表示該文件的所有者群組 ID，這裡是 `root`。

6. **文件大小 (`4096`)** - 表示文件的大小，以位元組為單位。這裡的 `4096` 表示文件大小為 4096 位元組。

7. **修改日期 (`十 26 09:02`)** - 表示文件的最後修改日期和時間。這裡的 `十 26 09:02` 表示 10 月 26 日 09:02，中文數字代表的是月份。

8. **文件名稱 (`.`)** - 最後一欄表示文件或目錄的名稱。

### 3. 修改資料夾權限

指令: 
1. `sudo chown 50000:root 文件名` (修改單一檔案的使用者為 `50000`，群組設定為 `root`)
2. `sudo chown 50000:root *`(更改目錄中所有文件的使用者為 `50000`，群組設定為 `root`)

修改完成後如下圖， Airflow 就可以正常運作了。

![folder-auth-after](modify_authorization\image_04.png)