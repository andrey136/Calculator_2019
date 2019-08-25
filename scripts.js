let arrNumbers = [];
let arrOperations = [];

function number (x) {
  const str = document.getElementById('input').value;
  if (str === '0' && x === 0) x = '';
  document.getElementById('input').value += x;
  console.log(document.getElementById('input').value);
}

function operation (x) {
  arrNumbers.push(+document.getElementById('input').value);
  document.getElementById('input').value = '';
  arrOperations.push(x);
  console.log(x);
  console.log(arrNumbers);
}

function result () {
  arrNumbers.push(+document.getElementById('input').value);
  let count = arrNumbers[0];
  arrOperations.map((el, ind) => {
    if (el === '+') count += arrNumbers[ind + 1];
    if (el === '-') count -= arrNumbers[ind + 1];
    if (el === 'x') count *= arrNumbers[ind + 1];
    if (el === '/') count /= arrNumbers[ind + 1];
  });
  document.getElementById('input').value = count;
  arrNumbers = [];
  arrOperations = [];
}

function clearInput () {
  arrNumbers = [];
  arrOperations = [];
  document.getElementById('input').value = '';
}

function del () {
  const str = document.getElementById('input').value;
  document.getElementById('input').value = str.slice(0, str.length - 1);
  console.log('delete');
}

function changeMinus () {
  const str = document.getElementById('input').value;
  if (str !== '' && str !== '0') {
    str[0] === '-' ? document.getElementById('input').value = str.slice(1)
      : document.getElementById('input').value = `-${str}`;
  }
}
