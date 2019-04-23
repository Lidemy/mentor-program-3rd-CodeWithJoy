function capitalize(str) {
  let arr = str.split('');
  arr[0] = arr[0].toUpperCase()
  let newStr = arr.join('');

  return newStr;
}

console.log(capitalize('hello'));
