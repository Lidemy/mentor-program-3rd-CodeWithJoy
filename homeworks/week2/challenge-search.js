// 挑戰：現在有一個排序好的陣列 arr，裡面的元素都是正整數而且保證不會重複。
//給你一個數字 n，請寫出一個函式 search 回傳 n 在這個陣列裡面的 index，沒有的話請回傳 - 1。

function search(arr, n) {
    var half = Math.floor((arr.length) / 2)   //創造一個中間點-->終極密碼
    if (n >= arr[half]) {
        for (var i = half; i < arr.length; i++) {
            if (arr[i] === n) return i
        }
    } else {
        for (var i = 0; i < half; i++) {
            if (arr[i] === n) return i
        }
    }
    return -1
}


//要比下面快
/* function search(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === n) return i
    }
    return -1
} */