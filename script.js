alert("Vamos fazer uns cálculos! Você vai me ajudar escolhendo os números, ok?");

let numberOne = Number(prompt("Digite o primeiro número:"));
let numberTwo = Number(prompt("Digite o segundo número:"));

if (numberOne == numberTwo) {
  alert("Você escolheu o mesmo número duas vezes, certo?")
};

alert("Agora, vamos utilizar a metemática para descobrir os seguintes resultados: a soma, a subtração, a multiplicação, a divisão, e o que resta de divisão desses números, se sobrar alguma coisa.");

let sum = numberOne + numberTwo;
let subtraction = numberOne - numberTwo;
let multiplication = numberOne * numberTwo;
let division = (numberOne / numberTwo).toFixed(2);
let remainder = numberOne % numberTwo;

alert("A soma dos números escolhidos é: " + sum);

if (sum % 2 == 0) {
  alert("A soma é um número par, correto?")
};

alert("A subtração dos números escolhidos é: " + subtraction);

alert("A multiplicação dos números escolhidos é: " + multiplication);

alert("A divisão dos números escolhidos é: " + division);

alert("O resto da divisão dos números escolhidos é: " + remainder);
