const prompt = require('prompt-sync')();
const { encontrarMaiorNota, encontrarMenorNota, calcularMedia, contarAprovados, contarReprovados } = require("./notas.js");

let alunos = [];

for (let i = 1; i <= 10; i++) {
  let nome = prompt(`Digite o nome do aluno ${i}:`);
  let nota = parseFloat(prompt(`Digite a nota do aluno ${i}:`));

  alunos.push({ nome: nome, nota: nota });
}

// chama a função para encontrar a maior nota
let maiorNota = encontrarMaiorNota(alunos);
// chama a função para encontrar a menor nota
let menorNota = encontrarMenorNota(alunos);
// chama a função para encotrar a média de todas as notas
let media = calcularMedia(alunos);
// chama a função para encotrar a média de todas as notas
let aprovados = contarAprovados(alunos);
// chama a função para encotrar a média de todas as notas
let reprovados = contarReprovados(alunos);

console.log(
  "A maior nota foi " + maiorNota.nota + " do aluno " + maiorNota.nome
);
console.log(
  "A menor nota foi " + menorNota.nota + " do aluno " + menorNota.nome
);
console.log("A média de todas as notas é " + media.toFixed(2));
console.log("Quantidade de alunos aprovados: " + aprovados);
console.log("Quantidade de alunos reprovados: " + reprovados);