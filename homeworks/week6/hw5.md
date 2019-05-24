## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

1. （大型的）文字輸入區塊 ，可加上 cols="" , rows="" 的內容。
~~~~html
<textarea rows="4" cols="50"></textarea>
~~~~~

<br>
eg. <textarea rows="4" cols="50"></textarea>

2. 影片播放區塊 
~~~~html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
~~~~
在標籤內要加上 `controls` 字樣，才會顯示播放，暫停等選項，不放就會是個靜止畫面，而且「無法」播放！放入`<source src="movie.mp4" type="video/mp4">`，表明影片來源與類型。

eg. <video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>

3. 下拉式選單
~~~~html
<select>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
</select>`
~~~~

eg.
<select>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>

## 請問什麼是盒模型（box modal）
<img src='https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwilpeGdl7PiAhW8JaYKHSsRDEMQMwg7KAAwAA&url=https%3A%2F%2Fread01.com%2FBn053.html&psig=AOvVaw1y9yrTf9tK4qLH_b3H6c22&ust=1558753448522947&ictx=3&uact=3'>

簡單來說每個網頁元素都是一個盒子，佔有一定的方形空間。盒子彼此互相堆疊，形成網頁的樣子。要注意的是，一般瀏覽器預設顯示是 content+padding的寬度，但如果你CSS設定

`body{box-sizing: border-box;}`

則元素寬度會把padding, border都包含在內，你就可以用最開始預設的 `width`, `height` 值去規定元素大小。 

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
- inline: 行內元素，無法設定元素高度。會跟其他元素並排在一起（因為在同一行內，但太大還是會掉到下一行去）
- block: 區塊元素，可設定元素寬、高。佔滿整個一行，下個元素會直接換行排列。
- inline-block: 仍算行內元素，但可以設定元素高度了！

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

- static: position預設值，不特別定位，元素該在哪就在哪。
- relative: 相對位置，相對於原來該在哪的位置做偏移，有top, right, bottom, left等屬性。
- absolute: 從文檔流中被抽出，並找一個「上層position不是 static的元素」的參考點做定位。如果上層所有元素都是static，則對body(也就是viewport左上角的點)做定位。
- fixted: 對視窗(viewport)的左上角一點做定位，在滾動網頁時有固定效果。
