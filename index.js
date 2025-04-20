const mensajem = document.querySelector("#mensagem");
let resposta=document.querySelector("#resposta");
let valor ="Não é porque seu sonho ainda não se realizaram que você deve parar de sonhar";


mensajem.addEventListener("click",evento);

function evento(){
resposta.innerHTML = valor;
setTimeout (()=>{resposta.innerHTML=''},5000);
}
