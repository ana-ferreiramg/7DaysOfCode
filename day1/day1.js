let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

const comparaVariaveis = (num, string, name1, name2, operator) => {
  return operator === 'equality'
    ? num == string
      ? `As variáveis ${name1} e ${name2} tem o mesmo valor, mas tipos diferentes.`
      : `As variáveis ${name1} e ${name2} não tem o mesmo valor.`
    : operator === 'strict equality'
    ? num === string
      ? `As variáveis ${name1} e ${name2} tem o mesmo valor e mesmo tipo.`
      : `As variáveis ${name1} e ${name2} não tem o mesmo tipo.`
    : 'DEU ERRADO';
};

console.log(comparaVariaveis(numeroUm, stringUm, 'numeroUm', 'stringUm', 'equality'));
console.log(comparaVariaveis(numeroTrinta, stringTrinta, 'numeroTrinta', 'stringTrinta', 'strict equality'));
console.log(comparaVariaveis(numeroDez, stringDez, 'numeroDez', 'stringDez', 'equality'));
