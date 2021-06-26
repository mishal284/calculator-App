function add() {
  let x = parseInt(document.querySelector("#numb1").value);
  let y = parseInt(document.querySelector("#numb2").value);
  let sum = x + y;
  document.getElementById('result').value= sum;
  
}
function subtract(){
  let x = parseInt(document.querySelector("#numb1").value);
  let y = parseInt(document.querySelector("#numb2").value);
  let subtraction = x - y;
  document.getElementById('result').value= subtraction;
  
}
function multiply() {
  let x = parseInt(document.querySelector("#numb1").value);
  let y = parseInt(document.querySelector("#numb2").value);
  let product = x * y;
  document.getElementById('result').value= product;
  
}
function divide() {
  let x = parseInt(document.querySelector("#numb1").value);
  let y = parseInt(document.querySelector("#numb2").value);
  let division = x / y;
  document.getElementById('result').value= division;
  
}