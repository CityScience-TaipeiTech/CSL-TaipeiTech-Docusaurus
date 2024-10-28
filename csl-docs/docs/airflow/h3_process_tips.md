---
title: Airflow DAG圖資轉H3模組注意事項
description: 如何正確使用H3-Toolkit進行轉換
hide_table_of_contents: false
---

# Airflow DAG圖資轉H3模組注意事項
> **Author |** Drew　
> **Date |** 2024-10-04

## 00 導入步驟與流程

![Process_diagram](h3_process\CSL_Project_System_Diagram.png)
由於隨著專案逐步迭代開發，整體資料流架構與DAG寫法容易產生新舊版分歧，因此透過此份文件記錄下關鍵資訊

- 轉換為三種解析度H3並存入HBase
- 轉換為mbtiles作為前端資料檢視與呈現

## 01 H3格式轉換
### 01-1 轉換為H3格式(Convert_to_H3)並存入HBase
- 主要功能：轉換為H3格式(基本res:12)、計算不同resolution並存入HBase

### 01-2 轉換為不同解析度的H3(Convert_to_H3)並存入HBase
## 注意事項: 
- 不能直接使用PostgreDB中的資料轉res9、res7資料
- 給Windows用戶：調整本地端docker memory usage避免資料量過大被停止任務
- **參考文章**｜[Set up config like memory limits in Docker for Windows and WSL2](https://mrakelinggar.medium.com/set-up-configs-like-memory-limits-in-docker-for-windows-and-wsl2-80689997309c)

## 02 MBTiles格式轉換
