function displayMessage() {
  let learningFront = [],
    learningBack = [],
    questions = 3;

  let road = prompt(`Qual caminho gostaria de seguir? Responda 1 para Front-End e 2 para Back-End.`);

  if (road.length === 0) {
    return 0;
  }

  switch (parseInt(road)) {
    case 1:
      let answer1 = prompt('Quer aprender React ou aprender Vue?').toLowerCase();
      learningFront.push(answer1);

      let answer2 = prompt(
        'Gostaria de seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? Responda 1 para especializar e 2 para se tornar Fullstack.',
      );

      if (parseInt(answer2) === 1) {
        answer2 = 'especialista';
      } else {
        answer2 = 'fullstack';
      }

      while (questions <= 3 && questions > 0) {
        let techsFront = prompt('Tem mais alguma tecnologia que você gostaria de aprender?');
        learningFront.push(techsFront);
        questions--;
      }

      alert(`Você escolheu o caminho Front-end e quer ser ${answer2}. As tecnologias que você quer aprender são: ${learningFront}`);
      break;
    case 2:
      let answer3 = prompt('Quer aprender C# ou aprender Java?').toLowerCase();
      learningBack.push(answer3);

      let answer4 = prompt(
        'Gostaria de seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? Responda 1 para especializar e 2 para se tornar Fullstack.',
      );

      if (parseInt(answer4) === 1) {
        answer4 = 'especialista';
      } else {
        answer4 = 'fullstack';
      }

      while (questions <= 3 && questions > 0) {
        let techsBack = prompt('Tem mais alguma tecnologia que você gostaria de aprender?');
        learningBack.push(techsBack);
        questions--;
      }

      alert(`Você escolheu o caminho Back-end e quer ser ${answer4}. As tecnologias que você quer aprender são: ${learningBack}`);
      break;
    default:
      let again = prompt('Resposta inválida! Tentar novamente? 1 - SIM || 2 - NÃO');
      return parseInt(again) === 1 ? displayMessage() : 0;
  }
}

displayMessage();
