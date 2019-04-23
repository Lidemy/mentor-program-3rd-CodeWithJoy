``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 函式傳入一個陣列 arr ： [3, 5, 8, 13, 22, 35]。
2. 進入第一個迴圈，判斷 arr 中每個值是否是大於零的數字，如果不是，直接回傳 'invalid'。arr[0] 為 3 ，大於零，arr[1] 為 5 ，大於零... arr[5] 為 35，大於零。所有數字均大於零，進入第二個迴圈。
3. 進入第二個迴圈，i = 2 ，所以從第三個 arr 項開始檢查，每行要符合 arr[2] === arr[1] + arr [0] 的規則。
4. 第 2-1 圈，8 === 5 + 3  ，繼續下一圈。
4. 第 2-2 圈，13 === 8 + 5 ，繼續下一圈。
4. 第 2-3 圈，22 !== 13 + 8 (應等於 21 ) ，符合 if 語句，回傳 'invalid' ，函式執行結束。

此函式的功能，在檢查 arr 是否為一個費波那契數列。

