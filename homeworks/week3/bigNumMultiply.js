const add = require('./hw5.js');

function multiply(a, b) {
  const aArr = a.split('');
  const bArr = b.split('');
  const cArr = [];// 儲存位數
  for (let i = aArr.length - 1; i >= 0; i--) {
    for (let j = bArr.length - 1; j >= 0; j--) {
      cArr.push([parseInt(aArr[i], 10) * parseInt(bArr[j], 10)] + '0'.repeat(aArr.length + bArr.length - 2 - i - j));
    }
  }
  const ans = cArr.reduce(add);
  return ans;
}

console.log(multiply('12344', '1937460'));
console.log(multiply('12', '133'));
