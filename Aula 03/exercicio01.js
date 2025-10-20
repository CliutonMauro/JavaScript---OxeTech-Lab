let anoNascimento = Number(input("Digite o ano de nascimento: "));
let anoAtual = Number(input("Digite o ano atual: "));
let idade = anoAtual - anoNascimento;

if (idade >= 18) {
  console.log(`Você completa ${idade} anos em ${anoAtual} e poderá tirar a habilitação.`);
} else {
  console.log(`Você completa ${idade} anos em ${anoAtual} ainda não poderá tirar a habilitação.`);
}