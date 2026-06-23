
document.addEventListener("DOMContentLoaded", function () {

  // MENU MOBILE
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

  // FORMULÁRIO DE CONTATO
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
