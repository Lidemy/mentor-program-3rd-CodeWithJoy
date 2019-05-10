// 1. map寫法
function alphaSwap(str) {
  const arr = str.split('');
  const newArr = arr.map((e) => {
    if (e === e.toUpperCase()) {
      return e.toLowerCase();
    }
    return e.toUpperCase();
  });
  return newArr.join('');
}

module.exports = alphaSwap;

// 2. for 迴圈的寫法
/* function alphaSwap(str) {
  const arr = str.split('');
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === arr[i].toUpperCase()) {
      newArr.push(arr[i].toLowerCase());
    } else {
      newArr.push(arr[i].toUpperCase());
    }
  }
  return newArr.join('')
} */
