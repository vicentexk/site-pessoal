// script.js

// Seleciona elementos
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const closePopup = document.getElementById("close-popup");
const themeToggle = document.getElementById("theme-toggle");

// Quando clicar em um botão de seção (como Estudos, Projetos, Contato)
function openPopup(section) {
  let content = "";

  switch (section) {
    case "estudos":
      content = `
        <h2>Meus Estudos</h2>
        <p>Aqui vai uma descrição sobre seus cursos, aprendizados e formações.</p>
        <!-- Coloque aqui suas imagens -->
        <div class="image-area">
          <!-- [IMAGEM_ESTUDOS.PNG] -->
        </div>
      `;
      break;

    case "projetos":
      content = `
        <h2>Projetos</h2>
        <p>Liste seus principais projetos, repositórios e experiências práticas.</p>
        <!-- Coloque aqui suas imagens -->
        <div class="image-area">
          <!-- [IMAGEM_PROJETOS.PNG] -->
        </div>
      `;
      break;

    case "contato":
      content = `
        <h2>Contato</h2>
        <p>Coloque links das suas redes ou e-mail para contato.</p>
        <!-- Coloque aqui suas imagens -->
        <div class="image-area">
          <!-- [IMAGEM_CONTATO.PNG] -->
        </div>
      `;
      break;

    case "sobre":
      content = `
        <h2>Sobre Mim</h2>
        <p>Uma breve apresentação sobre você.</p>
        <!-- Coloque aqui suas imagens -->
        <div class="image-area">
          <!-- [IMAGEM_SOBRE.PNG] -->
        </div>
      `;
      break;

    default:
      content = `<p>Conteúdo não encontrado.</p>`;
  }

  popupContent.innerHTML = content;
  popup.classList.remove("hidden");
}

// Fecha o popup
closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Fecha o popup ao clicar fora da janela
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.add("hidden");
  }
});

// Alterna o tema
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Troca o texto do botão
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️ Modo Claro";
  } else {
    themeToggle.textContent = "🌙 Modo Noturno";
  }
});

