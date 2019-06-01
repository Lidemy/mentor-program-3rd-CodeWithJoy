## 什麼是 DOM？
DOM (Document Object Model 文件物件模型)，是一個描述網頁元素分佈位置的模型。其像是一棵家族樹（family tree）。從最上端的 document 元素出發，往下延伸出 head, body ...等等元素，是一個層層包覆的關係。當你要取用某個元素時，就要利用 DOM 的順序，去抓取該元素。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
當網頁上有事件發生(eg. 一個點擊 click)，事件會沿著 DOM 結構，從 document 元素往下傳遞 到 target 後，再由 target 往上傳遞該事件回到 document 處。往下傳遞時稱為「捕獲」(感覺像是目標元素抓到了該事件)，往上傳遞時稱為「冒泡」（感覺像是該事件上浮出水面）。即事件傳遞是「先捕獲，後冒泡」，但當你觸發該元素的位置在 target 上時，因為就是觸發元素本身，則沒有補獲、冒泡之分。
阻止事件傳遞可使用 e.stopPropagation()，利用addEventListener() 第三個參數決定是要阻止捕獲(當參數為 true)，或是冒泡(當參數為 false 或未填)。

## 什麼是 event delegation，為什麼我們需要它？
事件代理，簡單來說就是由目標元素的父元素們，去做事件監聽。需要此方法的原因主要有二：
1. 因為我們可利用動態新增/刪除元素，但當這麼做時，你無法在事先就綁定 eventLister ，因此就藉由綁定父元素，來監聽之後動態新增的子元素們。
2. 另外也是因為可能有非常多個子元素，一個一個綁定 eventListener 效率低落，不如直接綁父元素做監聽。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
1. event.preventDefault()，阻止元件預設行為。比方說 <input type=submit value='按我送出'>的預設行為是直接提交表單，網頁換頁，如使用 event.preventDefault()，則會阻止提交行為，讓我們可以做其餘操作(eg. 驗證資料)後再提交。

2. event.stopPropagation()，阻止事件傳遞（捕獲 or 冒泡），使事件觸發的後續行為只發生在綁定的元素上。此點適用當你頁面的同一個位置其實有多個元素重疊，且都綁上不同 eventListener 時。本次 week7 hw1 即使用了 event.stopPropagation()，讓點擊「再玩一次」按鈕時，不會觸發 document 的讀秒顯示。