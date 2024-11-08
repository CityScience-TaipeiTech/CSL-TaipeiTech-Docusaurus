---
title: Routing 功能概述
description: 了解 Routing 整體工作流程並知道如何安裝、應用
hide_table_of_contents: false
---

# Routing 功能概述
> **Author |** Drew　
> **Date |** 2024-10-04


![otp_intro](routing_system\otp_1.png)


## 01 OTP 介紹

[OTP ( Open Trip Planner )](https://docs.opentripplanner.org/en/latest/) 是一個開源的多種交通模式規劃工具，可透過讀取 GTFS 相關資料達到與 Google Map 相近的路線規劃功能。目前在實驗室中主要作為 Urban Mobility Simulator 中各 AI Agent 的一天路徑規劃使用。

本篇文件著重紀錄如何成功啟用 OTP 工具作為後續 Routing使用，關於 GTFS 資料清理詳另一篇文件〈GTFS 資料概述〉。

**官方網站介紹**
> OpenTripPlanner（OTP）是一個開源的多模式行程規劃工具，主要針對公共交通工具，並結合自行車、步行及各種移動服務（如共享單車和叫車服務）的出行需求。其伺服器組件可運行於任何具備Java虛擬機的平臺（包括Linux、Mac和Windows）。OTP 提供 GraphQL API，可由多種客戶端存取，包括開源的Javascript元件和原生行動應用程式。OTP 利用開放數據和標準化文件格式（主要是GTFS和OpenStreetMap）來構建交通網路。它可以即時更新資訊和警報，讓客戶端即時查看，並能夠在規劃行程時考慮到各種中斷及服務變更。OTP 在 LGPL 授權下發布。截至2020年，該代碼庫已經開發超過十年，並且被世界各地的交通當局和行程規劃應用所使用。

**比較**

![osrm](routing_system\otp_2.png)

同樣作為開源路徑規劃工具，[OSRM (Open Source Routing Machine)](https://github.com/Project-OSRM) 也是經常跟 OTP 一起被提及的工具。不同的是 OSRM 專注在最短路徑規劃，且交通模式上只允許單一種模式 ( Bike / Car / Foot)，因此在此專案暫時不考慮使用。

另外，也需注意的是，OTP 也有其轉乘與路線規劃邏輯，目前尚未深入研究。但在部分路徑規劃上會發現較不直覺 (ex. 明明終點在火車站附近，但卻需要繞遠路搭公車到)。建議可進一步研究路線設定參數以及背後的演算法邏輯，以取得較佳成果。

**OTP 演算法官方文件**：[文件](https://docs.opentripplanner.org/en/latest/Bibliography/)。

## 02 安裝設定細節與流程

整體 [Routing 步驟](https://www.figma.com/board/XCMzJTHkgiz6ncWJJS9EoE/CSL-Project-System-Diagram?node-id=163-1576&t=gWaWPtA3coHXjT2u-1)大致如下，透過 TDX 與 OSM 網站分別取得 GTFS資料以及路網底圖，再進行資料清理以及底圖裁切，最後在 GTFS 資料經過 Mobility Data 平台驗證後，彙整至同一個資料夾並使用 `otp.jar` 建置。

![build_otp_process](routing_system\build_otp_process.png)

OTP 是由 Java 語言撰寫，在安裝過程中建議參考下方官方文件之步驟，先下載對應之 Java SDK ( 目前是建議 21 版 )，安裝後再進行後續設定。另外實驗室 GitHub 也有對應專案，可直接複製並在資料準備好後，於地端使用 docker 執行。

**官方文件｜** [點此前往](https://docs.opentripplanner.org/en/dev-2.x/Basic-Tutorial/)

**GitHub Repository｜** [點此前往](https://github.com/CityScience-TaipeiTech/opentripplanner)


### 02-1 OSM 底圖切割製作

可依照需要自定義之 Routing 範圍 ( ex. 單一縣市 )先切割 OSM 檔案，在建置時可以省下時間，後續對於資源的占用也較低。

#### 1. 自 OSM 官網下載 GeoFabric 檔案與裁切工具

下方官網處為geofabrik檔案，點 taiwan_latest.osm.pbf 下載該檔案
![osm_geofabrik](routing_system\otp_3.png)

下方為裁切工具，可依照作業系統下載所需版本。
![osmconvert](routing_system\otp_4.png)

#### 2. 查詢裁切區域經緯度


#### 3. 輸入指令進行裁切


#### 4. 檔案重新命名 *需複製一份以保留osm裁切後底圖

### 02-2 OTP 記憶體設定與建立

1. 匯入 GTFS 資料(修正可看另一篇)
2. 設定指令: 給定記憶體、給定port

## OTP 介面設定

1. 頁面各項設定介紹與用途

## OTP API 串接

1. 如何建立 API 批次傳入經緯度與回傳轉乘路徑