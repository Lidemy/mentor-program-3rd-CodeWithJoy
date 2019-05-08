function join(arr, str) {
  if (arr.length === 1) {
    return arr;
  }
  const newArr = [];
  let ansS = '';
  for (let i = 0; i < arr.length - 1; i += 1) {
    newArr[i] = arr[i] + str;
    ansS += newArr[i];
  }
  return ansS + arr[arr.length - 1];
}

function repeat(str, times) {
  let newStr = '';
  for (let i = 0; i < times; i += 1) {
    newStr += str;
  }
  return newStr;
}

console.log(join('a', '!'));
console.log(repeat('a', 5));
