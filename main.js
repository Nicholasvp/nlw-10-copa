function createGame(player1, hour, player2) {
  return `
    <li>           
      <img src="./assets/icon-${player1}.svg" 
        alt="Bandeira do ${player1}" />
      <b>${hour}</b>
      <img src="./assets/icon-${player2}.svg"
      alt="Bandeira de ${player2}" />
    </li>
  `
}
let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `        
    <div class="card" style='animation-delay: ${delay}s'>
      <h2>${date} <span>${day}</span></h2>
        <ul>
        ${games}
        </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
    createCard("24/11","quinta", createGame("brazil", "16:00", "serbia")) +
    createCard("28/11", "segunda", createGame("switzerland", '13:00', 'brazil') +
    createGame('portugal', '16:00', 'uruguay')) +
    createCard('02/12', 'sexta', createGame('brazil', '16:00', 'cameroon'))

 let estilo = document.querySelector('#estilo')

 
 function blue() {
    estilo.className = "blue"
 }

 function yellow() {
   estilo.className = "yellow"
 }
 
 function green() {
   estilo.className = "green"
 }

 document.querySelector("#azul").addEventListener("click", blue)
 document.querySelector("#verde").addEventListener("click", green)
 document.querySelector("#amarelo").addEventListener("click", yellow)
