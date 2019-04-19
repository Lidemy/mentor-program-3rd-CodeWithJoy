## 交作業流程

以第一週交作業為例：
1. 先開一個該週功課branch，切換過去寫功課
    <pre><code>git checkout -b hw1</code></pre>
2. 邊寫邊commit 相關進度
       <pre><code>git add * 
       git commit -am "目前完成進度狀況" 
       </code></pre>     

3. 全部寫完該週功課並commit完成後，上傳到github <pre><code>git push origin hw1 //看你是哪個branch名稱就推哪個origin</code></pre>
4. 在github介面上做pull request 並 ＠huli
5. 然後開一個issue說明交了作業，標題內文有規範。 標題: [Week1] 內文：貼上pull request後得到的網址，機器人會自動幫你tag同學來看作業
6. 等待胡立宣判批改作業結果lol
7. 胡立merge後在電腦本機把github上的新內容抓下來        
            
       git pull origin master

8. 可把合併的branch刪除

       git branch -d hw1