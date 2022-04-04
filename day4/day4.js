function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let number = getRandomNumber(0, 10);

function displayMessage() {
  let tries = 3;
  while (tries <= 3 && tries > 0) {
    let guess = prompt('Qual o valor que você deseja chutar?');

    if (guess.length === 0) {
      return 0;
    } else {
      if (parseInt(guess) === number) {
        alert(`Parabéns, você acertou! O número era ${number} e o seu palpite foi ${guess}!`);
        return 0;
      } else {
        alert(`Tente de novo. Você tem mais ${tries - 1} tentativa(s).`);
        tries--;
      }
    }
  }

  alert(`O número era ${number}...`);
}

displayMessage();
