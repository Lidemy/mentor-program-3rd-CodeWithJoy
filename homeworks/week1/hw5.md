## 請解釋後端與前端的差異。
前端：主要處理電腦中「看得到」＋瀏覽器能承受的程式邏輯處理部分。包括各種介面顯示、跨裝置顯示、圖案、動畫、畫面資料渲染...等。
後端：處理電腦「看不到」以及伺服器的部分。包括各種資料運算、儲存...。

## 假設我今天去 Google 首頁搜尋框打上：JavaScri[t 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
(複習之前的答案)
流程：client端 --> request --> server端 --> response --> client 端 當按下enter，等於對server發出了request，請求回傳資料，而server在搜尋到要提供的資訊後，會給予response，再把資料丟回前台，完成資訊交換的過程。


## 請列舉出 5 個 command line 指令並且說明功用
- touch: 創建新檔案 or 碰一下檔案讓其更動日期變最新。
- mv: 移動或重新命名檔名，也可一次移動多個檔案
- ~: 回到系統根目錄
- cd: 移動到不同資料夾 (但如果你要跑到特定資料夾你也要知道它的路徑，有點麻煩)
- rm  || rmdir: 刪除檔案或刪除資料夾