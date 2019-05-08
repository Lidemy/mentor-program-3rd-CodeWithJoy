function reverse(str) {
  const arr = str.split('');
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr[i] = arr[arr.length - i - 1];
  }
  return newArr.join('');
}

console.log(reverse('hello'));
