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
