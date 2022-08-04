const elementoResposta = document.querySelector
("#resposta")
const inputPergunta = document.querySelector
("#inputPergunta")
const respostas = [
  "Neymar Jr",
"Kylian Mbappé", 
"Lionel Messi", 
"Pelé",
"Ronaldinho",
"Cristiano Ronaldo",
"Mohamed Salah",
"Kavin de Bruyne",
"Robert Lewandowski",
"Karim Benzema",
"Erling Haaland",
"Vinicius Junior",
"Harry Kane",
"Sadio Mané",
"Heung min Son",
"Mané",
"Trent Alexander-Arnold",
"Pedri",
"Raheem Sterling",
"Marcus Rashford",
"Virgil van Dijk",
"Thiago Alcântara",
"Phil Foden",
"Thibaut Courtois",
]

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

  const pergunta = "<div>" + inputPergunta.value + "</div>" 

  // gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random
  () * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  // sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
  }, 3000) 
}  