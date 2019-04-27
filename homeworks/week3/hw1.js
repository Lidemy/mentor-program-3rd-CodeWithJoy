function stars(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push('*'.repeat(i));
  }
  return arr;
}

odule.exports = stars;
