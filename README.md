# 注意事項
## csl docs 
1. 進入 csl-docs 資料夾
2. 使用 `yarn install` 安裝相依套件 
3. 使用 `yarn start` 開啟網頁，隨後可以即時看到修改後內容，但如果是刪除資料夾，那就要重開。
4. 確認修改完成後退回csl-docs外層，使用`sh build.sh`，build docker image
5. 使用 `sh start.sh` 啟動服務, 預設是開在 port 3000
6. 如果要關閉可以用 `sh close.sh`


