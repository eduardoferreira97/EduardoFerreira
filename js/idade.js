// Ano de nascimento
const anoNascimento = 1997;

// Obtém a data atual
const dataAtual = new Date();

// Obtém o ano atual
const anoAtual = dataAtual.getFullYear();

// Obtém o mês atual (0-11)
const mesAtual = dataAtual.getMonth();

// Obtém o dia atual (1-31)
const diaAtual = dataAtual.getDate();

// Calcula a idade
let idade = anoAtual - anoNascimento;

// Verifica se ainda não fez aniversário este ano
if (mesAtual < 08 || (mesAtual == 08 && diaAtual < 23)) {
  idade--;
}

document.getElementById("idade").textContent = idade;

