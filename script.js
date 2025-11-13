// Seleciona elementos
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const closePopup = document.getElementById("close-popup");
const themeToggle = document.getElementById("theme-toggle");
const buttons = document.querySelectorAll(".section-btn");

// Abre as janelas
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const section = btn.getAttribute("data-section");
    openPopup(section);
  });
});

// Função de abrir o popup
function openPopup(section) {
  let content = "";

  switch (section) {
    case "estudos":
      content = `
        <h2>Meus Estudos</h2>
        <p>Aqui vai uma descrição sobre seus cursos, aprendizados e formações.</p>
        <div class="image-area">[IMAGEM_ESTUDOS.PNG]</div>
      `;
      break;
    case "projetos":
      content = `
        <h2>Projetos</h2>
        <p>Liste seus principais projetos, repositórios e experiências práticas.</p>
        <div class="image-area">[IMAGEM_PROJETOS.PNG]</div>
      `;
      break;
    case "contato":
      content = `
        <h2>Contato</h2>
        <p>Coloque links das suas redes ou e-mail para contato.</p>
        <div class="image-area">[IMAGEM_CONTATO.PNG]</div>
      `;
      break;
    case "sobre":
      content = `
        <h2>Sobre Mim</h2>
        <p>Uma breve apresentação sobre você.</p>
        <div class="image-area">[IMAGEM_SOBRE.PNG]</div>
      `;
      break;
    default:
      content = `<p>Conteúdo não encontrado.</p>`;
  }

  popupContent.innerHTML = content;
  popup.classList.remove("hidden");
}

// Fecha popup
closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});

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
