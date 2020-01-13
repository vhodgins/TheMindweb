
var numstring = "";
var operator = "";
var num1 = 0;
var num2 = 0;

function enter(){
  switch (operator) {
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;

  }
}






main();

function main(){

  one.addEventListener('click', function() {
    numstring = numstring + "1";
    document.getElementById('result').innerHTML = numstring;
  })
  two.addEventListener('click', function() {
    numstring = numstring + "2";
    document.getElementById('result').innerHTML = numstring;
  })
  three.addEventListener('click', function() {
    numstring = numstring + "3";
    document.getElementById('result').innerHTML = numstring;
  })
  four.addEventListener('click', function() {
    numstring = numstring + "4";
    document.getElementById('result').innerHTML = numstring;
  })
  five.addEventListener('click', function() {
    numstring = numstring + "5";
    document.getElementById('result').innerHTML = numstring;
  })
  six.addEventListener('click', function() {
    numstring = numstring + "6";
    document.getElementById('result').innerHTML = numstring;
  })
  seven.addEventListener('click', function() {
    numstring = numstring + "7";
    document.getElementById('result').innerHTML = numstring;
  })
  eight.addEventListener('click', function() {
    numstring = numstring + "8";
    document.getElementById('result').innerHTML = numstring;
  })
  nine.addEventListener('click', function() {
    numstring = numstring + "9";
    document.getElementById('result').innerHTML = numstring;
  })
  zero.addEventListener('click', function() {
    numstring = numstring + "0";
    document.getElementById('result').innerHTML = numstring;
  })

//Operators

  add.addEventListener('click', function() {
    operator = '+';
    num1 = parseInt(numstring, 10);
    numstring = '';
    document.getElementById('result').innerHTML = numstring;
  })
  sub.addEventListener('click', function() {
    operator = '-';
    num1 = parseInt(numstring, 10);
    numstring = '';
    document.getElementById('result').innerHTML = numstring;
  })
  div.addEventListener('click', function() {
    operator = '/';
    num1 = parseInt(numstring, 10);
    numstring = '';
    document.getElementById('result').innerHTML = numstring;
  })
  mul.addEventListener('click', function() {
    operator = '*';
    num1 = parseInt(numstring, 10);
    numstring = '';
    document.getElementById('result').innerHTML = numstring;
  })

//equals
  equals.addEventListener('click', function() {
    num2 = parseInt(numstring, 10);

    document.getElementById('result').innerHTML = enter(); ;
  })

  clear.addEventListener('click', function(){
    num1 = 0;
    num2 = 0;
    numstring= '';
    document.getElementById('result').innerHTML = numstring;
  })


}
