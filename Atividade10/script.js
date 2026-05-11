function calcularIMC() {

  let altura = parseFloat(document.getElementById("altura").value);
  let peso = parseFloat(document.getElementById("peso").value);

  let imc = peso / (altura * altura);

  let mensagem = "";

  if (imc < 18.5) {
    mensagem = "Magreza";
  }
  else if (imc < 25) {
    mensagem = "Normal";
  }
  else if (imc < 30) {
    mensagem = "Sobrepeso";
  }
  else if (imc < 40) {
    mensagem = "Obesidade";
  }
  else {
    mensagem = "Obesidade Grave";
  }

  document.getElementById("resultado").innerHTML = "IMC: " + imc;

  document.getElementById("classificacao").innerHTML = "Classificação: " + mensagem;
}