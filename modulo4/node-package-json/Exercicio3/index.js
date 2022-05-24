const tarefa = process.argv[2]
const tarefas = ["lavar louça"]


tarefas.push(tarefa)

console.log("Tarefa adicionada com sucesso !")

console.log("Tarefas: " +tarefas)
/* var fs = require('fs')

const fileName = './Lista.txt';
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  const content = process.argv[2];
  fs.writeFile(fileName, content, err2 => {
    if (err2) {
      console.log(err2);
      return;
    }
    console.log('Escreveu');
    fs.readFile(fileName, 'utf8', (err3, data3) => {
      if (err3) {
        console.log(err3);
        return;
      }
      console.log(data3);
    });
  });
}); */