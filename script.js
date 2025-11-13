const buttons = document.querySelectorAll(".section-btn");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const closePopup = document.getElementById("close-popup");
const themeToggle = document.getElementById("theme-toggle");

// Abre o popup certo
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const section = btn.getAttribute("data-section");
    openPopup(section);
  });
});

function openPopup(section) {
  let content = "";

  if (section === "estudos") {
    content = `
      <h2>Meus Estudos</h2>
      <p>Descrição sobre cursos, aprendizados e formações.</p>
      <div class="img-space">[IMAGEM_ESTUDOS.PNG]</div>
    `;
  } else if (section === "projetos") {
    content = `
      <h2>Projetos</h2>
      <p>Liste seus principais projetos e experiências práticas.</p>
      <div class="img-space">[IMAGEM_PROJETOS.PNG]</div>
    `;
  } else if (section === "contato") {
    content = `
      <h2>Contato</h2>
      <p>Links das suas redes ou e-mail de contato.</p>
      <div class="img-space">[IMAGEM_CONTATO.PNG]</div>
    `;
  } else if (section === "sobre") {
    content = `
      <h2>Sobre Mim</h2>
      <p>Uma breve apresentação sobre você.</p>
      <div class="img-space">[IMAGEM_SOBRE.PNG]</div>
    `;
  }

  popupContent.innerHTML = content;
  popup.classList.remove("hidden");
}

// Fecha o popup
closePopup.addEventListener("click", () => popup.classList.add("hidden"));
window.addEventListener("click", (e) => {
  if (e.target === popup) popup.classList.add("hidden");
});

// Alterna o modo noturno
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Modo Claro"
    : "🌙 Modo Noturno";
});
