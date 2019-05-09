function add(a, b) { // 初始型態為字串
  if (a.length - b.length > 0) {
    b = '0'.repeat(a.length - b.length) + b;
  } else if (a.length - b.length < 0) {
    a = '0'.repeat(b.length - a.length) + a;
  }

  const aArr = a.split('');
  const bArr = b.split('');
  const cArr = [];
  for (let i = 0; i < aArr.length; i++) {
    cArr.push(parseInt(aArr[i], 10) + parseInt(bArr[i], 10));
  }
  for (let i = cArr.length - 1; i > 0; i--) {
    if (cArr[i] >= 10) {
      cArr[i] -= 10;
      cArr[i - 1] += 1;
    }
  }
  return cArr.join('');
}

module.exports = add;
