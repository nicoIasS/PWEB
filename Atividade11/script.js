  function Retangulo(x, y) {
    this._base = x;
    this._altura = y;

    this.calcularArea = function() {
      return this._base * this._altura;
    }
  }

  function calcularArea() {

    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;

    let ret = new Retangulo(base, altura);

    document.getElementById("resultadoArea").innerHTML = "Área do retângulo: " + ret.calcularArea();
  }

  class Conta {

    constructor(nome, correntista, banco, numeroConta, saldo) {
      this._nome = nome;
      this._correntista = correntista;
      this._banco = banco;
      this._numeroConta = numeroConta;
      this._saldo = saldo;
    }

    get nome() {
      return this._nome;
    }

    set nome(valor) {
      this._nome = valor;
    }

    get correntista() {
      return this._correntista;
    }

    set correntista(valor) {
      this._correntista = valor;
    }

    get banco() {
      return this._banco;
    }

    set banco(valor) {
      this._banco = valor;
    }

    get numeroConta() {
      return this._numeroConta;
    }

    set numeroConta(valor) {
      this._numeroConta = valor;
    }

    get saldo() {
      return this._saldo;
    }

    set saldo(valor) {
      this._saldo = valor;
    }
  }


  class Corrente extends Conta {

    constructor(nome, correntista, banco, numeroConta, saldo, especial) {
      super(nome, correntista, banco, numeroConta, saldo);

      this._especial = especial;
    }

    get especial() {
      return this._especial;
    }

    set especial(valor) {
      this._especial = valor;
    }
  }


  class Poupanca extends Conta {

    constructor(nome, correntista, banco, numeroConta, saldo, juros, dataVenc) {
      super(nome, correntista, banco, numeroConta, saldo);

      this._juros = juros;
      this._dataVenc = dataVenc;
    }

    get juros() {
      return this._juros;
    }

    set juros(valor) {
      this._juros = valor;
    }

    get dataVenc() {
      return this._dataVenc;
    }

    set dataVenc(valor) {
      this._dataVenc = valor;
    }
  }


  function mostrarCorrente() {

    let conta = new Corrente(
      document.getElementById("nomeCorrente").value,
      document.getElementById("correntista").value,
      document.getElementById("bancoCorrente").value,
      document.getElementById("numeroContaCorrente").value,
      document.getElementById("saldoCorrente").value,
      document.getElementById("especialCorrente").value
    );

    document.getElementById("resultadoCorrente").innerHTML =
      "Nome: " + conta.nome + "<br>" +
      "Banco: " + conta.banco + "<br>" +
      "Conta: " + conta.numeroConta + "<br>" +
      "Saldo: " + conta.saldo + "<br>" +
      "Saldo Especial: " + conta.especial;
  }


  function mostrarPoupanca() {

    let conta = new Poupanca(
      document.getElementById("nomePoupanca").value,
      document.getElementById("correntista").value,
      document.getElementById("bancoPoupanca").value,
      document.getElementById("numeroContaPoupanca").value,
      document.getElementById("saldoPoupanca").value,
      document.getElementById("jurosPoupanca").value,
      document.getElementById("dataVencPoupanca").value
    );

    document.getElementById("resultadoPoupanca").innerHTML =
      "Nome: " + conta.nome + "<br>" +
      "Banco: " + conta.banco + "<br>" +
      "Conta: " + conta.numeroConta + "<br>" +
      "Saldo: " + conta.saldo + "<br>" +
      "Juros: " + conta.juros + "<br>" +
      "Data de Vencimento: " + conta.dataVenc;
  }

