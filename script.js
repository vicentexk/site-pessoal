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

// 🌟 PARTÍCULAS
for (let i = 0; i < 25; i++) {
  const spark = document.createElement("div");
  spark.classList.add("spark");
  spark.style.left = Math.random() * 100 + "%";
  spark.style.top = Math.random() * 100 + "%";
  spark.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(spark);
}

/* ------------------------------------------------------------------ */
/* 🌟🌟🌟  PONG — ADICIONADO  | NADA DO SEU CÓDIGO FOI ALTERADO     */
/* ------------------------------------------------------------------ */

const pongPopup = document.getElementById("pongPopup");
const secretBtn = document.getElementById("secretPongBtn");
const closePong = document.getElementById("closePong");
const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

// abrir
secretBtn.addEventListener("click", () => {
  pongPopup.style.display = "flex";
  startPong();
});

// fechar
closePong.addEventListener("click", () => {
  pongPopup.style.display = "none";
});

// ---------------------- JOGO PONG ---------------------
let ball, paddleLeft, paddleRight, speed = 4;

function startPong() {

  ball = { x: 300, y: 200, radius: 8, dx: speed, dy: speed };

  paddleLeft = { x: 20, y: 150, w: 10, h: 80 };
  paddleRight = { x: 570, y: 150, w: 10, h: 80 };

  function drawRect(obj) {
    ctx.fillStyle = "white";
    ctx.fillRect(obj.x, obj.y, obj.w, obj.h);
  }

  function drawBall() {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.y < 0 || ball.y > canvas.height) ball.dy *= -1;

    if (
      ball.x < paddleLeft.x + paddleLeft.w &&
      ball.y > paddleLeft.y &&
      ball.y < paddleLeft.y + paddleLeft.h
    ) ball.dx *= -1;

    if (
      ball.x > paddleRight.x &&
      ball.y > paddleRight.y &&
      ball.y < paddleRight.y + paddleRight.h
    ) ball.dx *= -1;

    if (ball.x < 0 || ball.x > canvas.width) startPong();
  }

  function moveAI() {
    paddleRight.y += (ball.y - (paddleRight.y + paddleRight.h / 2)) * 0.05;
  }

  canvas.onmousemove = e => {
    paddleLeft.y = e.offsetY - paddleLeft.h / 2;
  };

  function loop() {
    if (pongPopup.style.display === "none") return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawRect(paddleLeft);
    drawRect(paddleRight);
    drawBall();
    moveBall();
    moveAI();

    requestAnimationFrame(loop);
  }

  loop();
}
