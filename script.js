function funcao() {
    let idade = document.getElementById("idade").value;
    let mensagem = "";

    if (idade >= 18) {
      mensagem = "Maior de idade e pode votar";
    } else if (idade >= 16) {
      mensagem = "Menor de idade, mas pode votar";
    } else {
      mensagem = "Menor de idade, e não pode votar";
    }

    document.getElementById("mensagem-texto").innerHTML = mensagem;
    document.getElementById("ex20").style.display = "block";
    document.getElementById("fechar-btn").style.display = "block";
  }

  function fecharMensagem() {
    document.getElementById("ex20").style.display = "none";
    document.getElementById("fechar-btn").style.display = "none";
  }