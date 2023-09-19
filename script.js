botao.addEventListener("click", function () {
    alert("aguarde o seu pedido");



  });
var quant = document.getElementById("quantidade")
var sabor = document.getElementById("sabores")
var nome = document.getElementById("nome")
var bot = document.getElementById("botao")

function vbot(){
  if(quant.value != "" && nome.value != "" && sabor.SelectedIndex != 0){
    bot.style.backgroundColor = (green)
  }
}
