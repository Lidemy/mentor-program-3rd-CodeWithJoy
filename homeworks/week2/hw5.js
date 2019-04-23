function join(arr, str) {

  if (arr.length === 1) {
    return arr
  } else {
    let newArr = [];
    let ansS = '';
    for (let i = 0; i < arr.length - 1; i++) {
      newArr[i] = arr[i] + str
      ansS += newArr[i]
    }

    return ansS + arr[arr.length - 1];
  }
}


function repeat(str, times) {
  let newStr = '';
  for (let i = 0; i < times; i++) {
    newStr += str
  }

  return newStr;
}

console.log(join('a', '!'));
console.log(repeat('a', 5));
