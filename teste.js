document.addEventListener("DOMContentLoaded", function(){
  const botao = document.getElementById("botao")
  botao.addEventListener("click", function(){
    let nome = document.getElementById("nome").value
    document.getElementById("resultado").textContent = "Eai " + nome
  })
})