let name, age, programmingLanguage, like;

function displayMessage() {
  name = prompt(`Qual o seu nome?`);
  console.log(typeof name);
  if (name.length === 0) {
    return 0;
  } else {
    age = prompt(`Quantos anos você tem, ${name}?`);
    programmingLanguage = prompt(`${name}, qual linguagem de programação você está estudando?`);
    like = prompt(`Você gosta de estudar ${programmingLanguage}? Responda com 'Sim' ou 'Não'.`);

    if (typeof like === 'string' && like.toLowerCase() === 'sim') {
      alert(`Muito bom! Continue estudando e você terá muito sucesso.`);
    } else if (typeof like !== 'string') {
      prompt('Valor inválido! Responda com sim ou não.');
    } else {
      alert(`Ahh que pena... Já tentou aprender outras linguagens?`);
    }

    showAnswer();
  }
}

function showAnswer() {
  alert(`Olá ${name}, você tem ${age} anos e já está aprendendo ${programmingLanguage}!`);
}

displayMessage();
