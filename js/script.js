
document.addEventListener("DOMContentLoaded", function () {

  // ========== MENU MOBILE ==========
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");

  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("aberto");
  });

  // Fecha o menu ao clicar em algum link
  document.querySelectorAll("#nav-menu a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("aberto");
    });
  });

  // ========== ALTERNAR SEÇÕES ==========
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("#nav-menu a[data-section]");

  function mostrarSecao(id) {
    sections.forEach(function (sec) {
      if (sec.id === id) {
        sec.classList.remove("section-hidden");
      } else {
        sec.classList.add("section-hidden");
      }
    });
  }

  // Mostrar apenas "sobre-mim" ao carregar
  mostrarSecao("sobre-mim");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const secao = this.dataset.section;
      mostrarSecao(secao);
      navMenu.classList.remove("aberto");
    });
  });

  // ========== DARK MODE ==========
  const themeBtn = document.getElementById("theme-btn");

  // Verificar preferência salva
  const temaSalvo = localStorage.getItem("theme");
  if (temaSalvo === "dark") {
    document.documentElement.dataset.theme = "dark";
    themeBtn.textContent = "☀️";
  }

  themeBtn.addEventListener("click", function () {
    const html = document.documentElement;
    if (html.dataset.theme === "dark") {
      html.dataset.theme = "";
      localStorage.setItem("theme", "light");
      themeBtn.textContent = "🌙";
    } else {
      html.dataset.theme = "dark";
      localStorage.setItem("theme", "dark");
      themeBtn.textContent = "☀️";
    }
  });

  // ========== FORMULÁRIO DE CONTATO ==========
  const form = document.getElementById("form-contato");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    alert("Mensagem enviada com sucesso! Em breve entrarei em contato.");
    form.reset();
  });

});
