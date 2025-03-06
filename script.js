let score1 = localStorage.getItem("score1") ? parseInt(localStorage.getItem("score1")) : 0;
let score2 = localStorage.getItem("score2") ? parseInt(localStorage.getItem("score2")) : 0;
let wins1 = localStorage.getItem("wins1") ? parseInt(localStorage.getItem("wins1")) : 0;
let wins2 = localStorage.getItem("wins2") ? parseInt(localStorage.getItem("wins2")) : 0;
let player1Name = localStorage.getItem("player1Name") || "Time 1";  
let player2Name = localStorage.getItem("player2Name") || "Time 2";  

document.getElementById("score1").innerText = score1;
document.getElementById("score2").innerText = score2;
document.getElementById("wins1").innerText = wins1;
document.getElementById("wins2").innerText = wins2;
document.getElementById("player1").value = player1Name;  
document.getElementById("player2").value = player2Name;  
document.getElementById("team1-name").innerText = player1Name;  
document.getElementById("team2-name").innerText = player2Name;  

// Função para adicionar pontos
function addPoints(points, team) {
  if (team === 1) {
    score1 += points;
    if (score1 >= 12) {
      score1 = 0;
      score2 = 0;
      wins1 += 1;
    }
    if (score1 < 0) score1 = 0;
  } else if (team === 2) {
    score2 += points;
    if (score2 >= 12) {
      score1 = 0;
      score2 = 0;
      wins2 += 1;
    }
    if (score2 < 0) score2 = 0;
  }

  document.getElementById("score1").innerText = score1;
  document.getElementById("score2").innerText = score2;
  document.getElementById("wins1").innerText = wins1;
  document.getElementById("wins2").innerText = wins2;

  localStorage.setItem("score1", score1);
  localStorage.setItem("score2", score2);
  localStorage.setItem("wins1", wins1);
  localStorage.setItem("wins2", wins2);
}

function decreaseWins(points, team) {
  if (team === 1) {
    wins1 -= points;
    if (wins1 < 0) wins1 = 0;
  } else if (team === 2) {
    wins2 -= points;
    if (wins2 < 0) wins2 = 0;
  }

  document.getElementById("wins1").innerText = wins1;
  document.getElementById("wins2").innerText = wins2;

  localStorage.setItem("wins1", wins1);
  localStorage.setItem("wins2", wins2);
}
function addWins(points, team) {
  if (team === 1) {
    wins1 += points;  
  } else if (team === 2) {
    wins2 += points;  
  }

  document.getElementById("wins1").innerText = wins1;
  document.getElementById("wins2").innerText = wins2;

  localStorage.setItem("wins1", wins1);
  localStorage.setItem("wins2", wins2);
}

document.getElementById("player1").addEventListener("input", function() {
  let player1Name = document.getElementById("player1").value;
  localStorage.setItem("player1Name", player1Name);
  document.getElementById("team1-name").innerText = player1Name || "Time 1";
});

document.getElementById("player2").addEventListener("input", function() {
  let player2Name = document.getElementById("player2").value;
  localStorage.setItem("player2Name", player2Name);
  document.getElementById("team2-name").innerText = player2Name || "Time 2";
});
