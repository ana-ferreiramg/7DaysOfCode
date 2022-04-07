let list = {
  frutas: [],
  laticinios: [],
  congelados: [],
  doces: [],
};
const displayMessage = () => parseInt(prompt('1 - Adicionar uma comida na sua lista de compras || 2 - Remover algum item da lista || 3 - Sair'));

function shoppingList() {
  let answer = displayMessage();

  switch (answer) {
    case 1:
      let item = prompt('Qual comida você deseja inserir?');
      let category = parseInt(prompt('Em qual categoria essa comida se encaixa? 1 - frutas | 2 - laticínios | 3 - congelados | 4 - doces.'));

      switch (category) {
        case 1:
          list.frutas.push(item);
          break;
        case 2:
          list.laticinios.push(item);
          break;
        case 3:
          list.congelados.push(item);
          break;
        case 4:
          list.doces.push(item);
          break;
        default:
          alert('Categoria inválida!');
          break;
      }
      shoppingList();
      break;
    case 2:
      let removeItem = prompt(`
      Qual item deseja remover?
        Lista de compras atual:
        Frutas: ${list.frutas}
        Laticínios: ${list.laticinios}
        Congelados: ${list.congelados}
        Doces: ${list.doces}
      `);

      Object.keys(list).forEach((item) => {
        let indice = list[item].indexOf(removeItem);

        while (indice >= 0) {
          list[item].splice(indice, 1);
          indice = list[item].indexOf(removeItem);
        }
      });

      document.write('Lista de compras: <br>');
      document.write('Frutas: ' + list.frutas + '<br>');
      document.write('Laticínios: ' + list.laticinios + '<br>');
      document.write('Congelados: ' + list.congelados + '<br>');
      document.write('Doces: ' + list.doces);
      break;
    case 3:
      document.write('Lista de compras: <br>');
      document.write('Frutas: ' + list.frutas + '<br>');
      document.write('Laticínios: ' + list.laticinios + '<br>');
      document.write('Congelados: ' + list.congelados + '<br>');
      document.write('Doces: ' + list.doces);
      break;
    default:
      alert('Resposta inválida!');
      shoppingList();
      break;
  }
}

shoppingList();
