const senhaCorreta = "1234";
let senhaDigitada;

do {
  senhaDigitada = prompt("Digite a senha: ");

  if (senhaDigitada !== senhaCorreta) {
    alert("Senha incorreta! Tente novamente.");
  }

} while (senhaDigitada !== senhaCorreta);
alert("Acesso liberado!");