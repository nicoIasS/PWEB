let janelaQuebrada = false;

function abrirJanela() {

  if (!janelaQuebrada) {

    document.getElementById("janela").src = "img/aberta.png";

    document.getElementById("texto").innerHTML =
      "Janela Aberta";
  }
}

function fecharJanela() {

  if (!janelaQuebrada) {

    document.getElementById("janela").src = "img/fechada.png";

    document.getElementById("texto").innerHTML =
      "Janela Fechada";
  }
}

function quebrarJanela() {

  document.getElementById("janela").src = "img/quebrada.png";

  document.getElementById("texto").innerHTML =
    "Janela Quebrada";

  janelaQuebrada = true;
}