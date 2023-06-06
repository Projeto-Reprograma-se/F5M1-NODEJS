function encontrarMaiorNota(alunos) {
  let maiorNota = 0;
  let nomeMaiorNota = "";

  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota > maiorNota) {
      maiorNota = alunos[i].nota;
      nomeMaiorNota = alunos[i].nome;
    }
  }

  return { nota: maiorNota, nome: nomeMaiorNota };
}

function encontrarMenorNota(alunos) {
  let menorNota = alunos[0];

  for (let i = 1; i < alunos.length; i++) {
    if (alunos[i].nota < menorNota.nota) {
      menorNota = alunos[i];
    }
  }

  return menorNota;
}

function calcularMedia(alunos) {
  let somaNotas = 0;

  for (let i = 0; i < alunos.length; i++) {
    somaNotas += alunos[i].nota;
  }

  return somaNotas / alunos.length;
}

function contarAprovados(alunos) {
  let aprovados = 0;

  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= 60) {
      aprovados++;
    }
  }

  return aprovados;
}

function contarReprovados(alunos) {
  let reprovados = 0;

  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota < 60) {
      reprovados++;
    }
  }

  return reprovados;
}

module.exports = {
  encontrarMaiorNota,
  encontrarMenorNota,
  calcularMedia,
  contarAprovados,
  contarReprovados
};