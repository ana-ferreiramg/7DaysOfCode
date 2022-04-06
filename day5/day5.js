let list = {
  frutas: [],
  laticinios: [],
  congelados: [],
  doces: [],
};
const displayMessage = () => prompt('Deseja adicionar uma comida na sua lista de compras?').toLowerCase();

function shoppingList() {
  let answer = displayMessage();

  switch (answer) {
    case 'sim':
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
    case 'nao':
    case 'não':
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
