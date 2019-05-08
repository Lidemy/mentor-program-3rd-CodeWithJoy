function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  let factorNum = 0; // 判斷式判斷factorNum 因數個數，只要大於 0 就不是質數
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      factorNum += 1;
    } else {
      factorNum += 0
    }
  }
  if (factorNum > 0) {
    return false
  }
  return true
}

module.exports = isPrime;
