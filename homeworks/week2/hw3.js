function reverse(str) {
  let arr = str.split('');
  let newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = arr[arr.length - i - 1]
  }
  return newArr.join('');
}

console.log(reverse('hello'));