// let number = 8;
// console.log(number);

// const otherNumber = 4;
// console.log(otherNumber);

// console.log(number + otherNumber);

// let string = 'apple';
// console.log(string);

// const otherString = 'greenApple';
// console.log(otherString);

// console.log(string + number);

// let isTrue = true;
// console.log(isTrue);

// const isFalse = false;
// console.log(isFalse);

// console.log(isFalse * otherNumber);

// let isUndefined = undefined;
// console.log(isUndefined);

// const isNull = null;
// console.log(isNull);

// console.log(isUndefined / number);

// function saludar(name) {
//   console.log('Hola ' + name);
// }

// saludar('Eugenia.');

// function sumar(num1, num2) {
//   console.log(num1 + num2);
// }
// sumar(2, 4);

function sayHello(name) {
  console.log('hola ' + name);
}
sayHello('Nuria');

function sayHello2() {
  console.log('Hola Nuria');
}
sayHello2();

function calculateSquareArea(side) {
  console.log(side * side);
}
calculateSquareArea(4);

function calculateTriangleArea(base, height) {
  console.log((base * height) / 2);
}
calculateTriangleArea(20, 5);

function calculateCircleArea(radius) {
  console.log(2 * 3.14 * radius);
}
calculateCircleArea(4);

function celsiusToFahrenheit(celsius) {
  console.log(celsius * 1.8 + 32);
}
celsiusToFahrenheit(30);

function fahrenheitToCelsius(fahrenheit) {
  console.log((fahrenheit - 32) / 1.8);
}
fahrenheitToCelsius(86);

function totalPrice(price) {
  console.log(price + price * 0.21);
}
totalPrice(40);

function writeMessage(name, material, size, note) {
  console.log(
    name +
      ' ha pedido una caja de ' +
      material +
      'de tamaño ' +
      size +
      '. ' +
      note
  );
}

writeMessage('Nuria', 'cuadernos ', 'grandes', 'Gracias');
