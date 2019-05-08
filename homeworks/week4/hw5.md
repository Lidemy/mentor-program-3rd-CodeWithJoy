## 請以自己的話解釋 API 是什麼
API(application programming interface) 是一套讓不同平台（可以是 client <-> server 或者 server <->> server ）之間彼此溝通、交換資料的方法。API 會幫你把你的 request 送出到指定的地方，並把獲得的 response 帶回來給你，完成信息交換。藉由 API 文件定義好的操作方式，你可以向特定服務進行存取、新增、更改、刪除資料...等行動。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
1. 201 Created --> create (POST方法新增資訊)時成功回傳。
請求已經被實現，而且有一個新的資源已經依據請求的需要而建立，且其URI已經隨Location頭資訊返回。假如需要的資源無法及時建立的話，應當返回'202 Accepted'。
2. 400 Bad Request
由於明顯的用戶端錯誤（例如，格式錯誤的請求語法，太大的大小，無效的請求訊息或欺騙性路由請求），伺服器不能或不會處理該請求。
3. 401 Unauthorized 
表示沒有通過授權，在串接 Twitch API 時，如果 header 裡沒有夾帶 client_ID 的資訊，則會回傳此結果。 類似於403 Forbidden。

source: wikipedia



## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。


BASE URL: https://www.myrestaurants.com
|功能            | HTTP method | path  | parameters | examples|
-----------------|-----|------|-------------| ---|
| 新增餐廳        | POST  | /restaurants| name:餐廳名, type:餐廳類型, site:地點 |                   |
| 回傳所有餐廳資料 |  GET   | /restaurants     |_limit:限制回傳資料數量 | /restaurants?_limits = 10
| 回傳單一餐廳資料 |  GET    | /restaurants/:id |    | /restaurants/12
| 更改餐廳        | PATCH  | /restaurants/:id            | name:餐廳名, type:餐廳類型, site:地點 | 
| 刪除餐廳        | DELETE |   /restaurants/:id         |
