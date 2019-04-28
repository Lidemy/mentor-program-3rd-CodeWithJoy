function multiply(a, b) {
    const aArr = a.split('');
    const bArr = b.split('');
    const cArr = [];  //儲存位數
    for (let i = aArr.length - 1; i >= 0; i--) {
        for (let j = bArr.length - 1; j >= 0; j--) {
            cArr.push([parseInt(aArr[i]) * parseInt(bArr[j])] + '0'.repeat(aArr.length - 1 + bArr.length - 1 - i - j))
        }
    }
    const ans = cArr.reduce(add);
    return ans;
}

//放入之前寫過的add函式
function add(a, b) { //初始型態為字串
    if (a.length - b.length > 0) {
        b = '0'.repeat(a.length - b.length) + b
    } else if (a.length - b.length < 0) {
        a = '0'.repeat(b.length - a.length) + a
    }

    const aArr = a.split('')
    const bArr = b.split('')
    const cArr = [];
    for (let i = 0; i < aArr.length; i++) {

        cArr.push(parseInt(aArr[i]) + parseInt(bArr[i]))
    }
    for (let i = cArr.length - 1; i > 0; i--) {
        if (cArr[i] >= 10) {
            cArr[i] = cArr[i] - 10;
            cArr[i - 1] = cArr[i - 1] + 1
        } cArr
    }
    return cArr.join('')
}
