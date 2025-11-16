// 🌙 DARK MODE
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "🌙" : "🌞";
});

// ✨ EFEITO DE MÁQUINA DE ESCREVER
const text = "Bem-vindo ao meu espaço pessoal!";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}
window.onload = typeWriter;

// 🎇 EFEITO AO ROLAR
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});
document.querySelectorAll(".section").forEach(s => observer.observe(s));

// 🌟 PEQUENAS PARTÍCULAS (BRILHO)
for (let i = 0; i < 25; i++) {
  const spark = document.createElement("div");
  spark.classList.add("spark");
  spark.style.left = Math.random() * 100 + "%";
  spark.style.top = Math.random() * 100 + "%";
  spark.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(spark);
}
// KONAMI CODE: ↑ ↑ ↓ ↓ ← → ← → ENTER
const konami = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","Enter"];
let kIndex = 0;

window.addEventListener("keydown", (e) => {
  if (e.key === konami[kIndex]) {
    kIndex++;
    if (kIndex === konami.length) {
      document.getElementById("secretPongBtn").style.display = "block";
      kIndex = 0;
    }
  } else {
    kIndex = 0;
  }
});
const pongBtn = document.getElementById("secretPongBtn");
const pongPopup = document.getElementById("pongPopup");
const closePong = document.getElementById("closePong");

pongBtn.addEventListener("click", () => {
  pongPopup.style.display = "flex";
  startPong();
});

closePong.addEventListener("click", () => {
  pongPopup.style.display = "none";
});
function startPong() {
  const canvas = document.getElementById("pongCanvas");
  const ctx = canvas.getContext("2d");

  let ballX = 250, ballY = 150, ballSpeedX = 3, ballSpeedY = 3;
  let paddleX = 200;
  const paddleWidth = 100, paddleHeight = 10;

  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(ballX, ballY, 8, 0, Math.PI * 2);
    ctx.fill();

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballX < 0 || ballX > canvas.width) ballSpeedX *= -1;
    if (ballY < 0) ballSpeedY *= -1;

    ctx.fillStyle = "white";
    ctx.fillRect(paddleX, canvas.height - 20, paddleWidth, paddleHeight);

    if (
      ballY > canvas.height - 30 &&
      ballX > paddleX &&
      ballX < paddleX + paddleWidth
    ) {
      ballSpeedY *= -1;
    }

    if (ballY > canvas.height) {
      ballX = 250;
      ballY = 150;
      ballSpeedX = 3;
      ballSpeedY = 3;
    }

    requestAnimationFrame(gameLoop);
  }

  window.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    paddleX = e.clientX - rect.left - paddleWidth / 2;
  });

  gameLoop();
}
