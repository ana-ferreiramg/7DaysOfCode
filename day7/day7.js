function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function displayMessage() {
  let num1, num2, result, again;
  let operation = parseInt(
    prompt(`
  Escolha qual operação deseja realizar:
  1 - Somar
  2 - Subtrair
  3 - Multiplicar
  4 - Dividir
  5 - Sair
  `),
  );

  switch (operation) {
    case 1:
      num1 = parseInt(prompt('Digite o primeiro número:'));
      num2 = parseInt(prompt('Digite o segundo número:'));
      result = add(num1, num2);
      again = prompt(`O resultado do cálculo ${num1} + ${num2} = ${result}. Deseja fazer um novo cálculo? 1 - Sim || 2 - Não`);
      return parseInt(again) === 1 ? displayMessage() : parseInt(again) === 2 ? alert('Até a próxima!') : 0;
      break;
    case 2:
      num1 = parseInt(prompt('Digite o primeiro número:'));
      num2 = parseInt(prompt('Digite o segundo número:'));
      result = subtract(num1, num2);
      again = prompt(`O resultado do cálculo ${num1} - ${num2} = ${result}. Deseja fazer um novo cálculo? 1 - Sim || 2 - Não`);
      return parseInt(again) === 1 ? displayMessage() : parseInt(again) === 2 ? alert('Até a próxima!') : 0;
      break;
    case 3:
      num1 = parseInt(prompt('Digite o primeiro número:'));
      num2 = parseInt(prompt('Digite o segundo número:'));
      result = multiply(num1, num2);
      again = prompt(`O resultado do cálculo ${num1} * ${num2} = ${result}. Deseja fazer um novo cálculo? 1 - Sim || 2 - Não`);
      return parseInt(again) === 1 ? displayMessage() : parseInt(again) === 2 ? alert('Até a próxima!') : 0;
      break;
    case 4:
      num1 = parseInt(prompt('Digite o primeiro número:'));
      num2 = parseInt(prompt('Digite o segundo número:'));
      result = divide(num1, num2);
      again = prompt(`O resultado do cálculo ${num1} / ${num2} = ${result}. Deseja fazer um novo cálculo? 1 - Sim || 2 - Não`);
      return parseInt(again) === 1 ? displayMessage() : parseInt(again) === 2 ? alert('Até a próxima!') : 0;
      break;
    case 5:
      alert('Até a próxima!');
      break;
    default:
      alert('Opção inválida! Tente uma das opções oferecidas!');
      displayMessage();
      break;
  }
}
displayMessage();
