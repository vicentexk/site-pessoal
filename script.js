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

// 🕹️ FUNCIONALIDADE SECRETA: MINI PONG
const secretBtn = document.getElementById("secretBtn");
const popup = document.getElementById("gamePopup");
const closeGame = document.getElementById("closeGame");

secretBtn.addEventListener("click", () => {
  popup.style.display = "flex";
  startPong();
});

closeGame.addEventListener("click", () => {
  popup.style.display = "none";
  cancelAnimationFrame(pongAnimation);
});

// === MINI PONG ===
let pongAnimation;
function startPong() {
  const canvas = document.getElementById("pong");
  const ctx = canvas.getContext("2d");

  const player = { x: 10, y: 120, w: 10, h: 60, dy: 0 };
  const ai = { x: 380, y: 120, w: 10, h: 60, dy: 2 };
  const ball = { x: 200, y: 150, r: 6, dx: 3, dy: 3 };

  document.addEventListener("keydown", e => {
    if (e.key === "ArrowUp") player.dy = -4;
    if (e.key === "ArrowDown") player.dy = 4;
  });
  document.addEventListener("keyup", e => {
    if (["ArrowUp", "ArrowDown"].includes(e.key)) player.dy = 0;
  });

  function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  }

  function drawCircle(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // mover jogador
    player.y += player.dy;
    if (player.y < 0) player.y = 0;
    if (player.y + player.h > canvas.height) player.y = canvas.height - player.h;

    // mover bola
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.y < 0 || ball.y > canvas.height) ball.dy *= -1;

    // colisão jogador
    if (
      ball.x - ball.r < player.x + player.w &&
      ball.y > player.y &&
      ball.y < player.y + player.h
    ) {
      ball.dx *= -1;
      ball.x = player.x + player.w + ball.r;
    }

    // colisão AI
    if (
      ball.x + ball.r > ai.x &&
      ball.y > ai.y &&
      ball.y < ai.y + ai.h
    ) {
      ball.dx *= -1;
      ball.x = ai.x - ball.r;
    }

    // IA simples
    if (ball.y > ai.y + ai.h / 2) ai.y += ai.dy;
    else ai.y -= ai.dy;

    // reset bola se sair
    if (ball.x < 0 || ball.x > canvas.width) {
      ball.x = 200;
      ball.y = 150;
      ball.dx *= -1;
    }

    drawRect(player.x, player.y, player.w, player.h, "#f6b93b");
    drawRect(ai.x, ai.y, ai.w, ai.h, "#85bb65");
    drawCircle(ball.x, ball.y, ball.r, "white");

    pongAnimation = requestAnimationFrame(update);
  }
  update();
}

// 🎮 KONAMI CODE PARA DESBLOQUEAR O PONG
const konamiCode = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "Enter"
];
let userInput = [];

window.addEventListener("keydown", (e) => {
  userInput.push(e.key);
  if (userInput.length > konamiCode.length) {
    userInput.shift(); // remove o mais antigo
  }

  if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
    showKonamiPopup();
    secretBtn.style.display = "flex";
