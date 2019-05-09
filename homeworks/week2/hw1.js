function printStars(n) {
  for (let i = 0; i < n; i += 1) {
    console.log('*');
  }
}

printStars(5);


document.querySelector('.btn').addEventListener('click', showCode);

function showCode() {
  let result = '';
  function addAvailableChar(className, char) {
    let availableChar = '';
    if (document.querySelector(`.${className}`).checked) {
      availableChar += char;
    }
    return availableChar;
  }
  addAvailableChar(en, 'abcdefghijklmnopqrstuvwxyz');
  addAvailableChar(num, '0123456789');
  addAvailableChar(sp, '!@#$%^&*');

  for (let i = 0; i <= 10; i++) {
    result += availableChar[Math.floor(Math.random() * availableChar.length)];
  }
  document.querySelector('.result').innerText = result;
}
