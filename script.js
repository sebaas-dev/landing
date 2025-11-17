// Año automático en el footer
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Manejo básico del formulario (demo)
const form = document.getElementById("form-contacto");
const state = document.getElementById("state");

if (form && state) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    console.log("Contacto:", data);
    state.textContent = "¡Gracias! Recibimos tu mensaje (demo, aún sin backend).";
    form.reset();
  });
}
// FAQ: abrir/cerrar respuestas
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq__question");
  const answer = item.querySelector(".faq__answer");

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");
    // cerrar todos
    faqItems.forEach((other) => other.classList.remove("is-open"));
    // si este no estaba abierto, abrirlo
    if (!isOpen) {
      item.classList.add("is-open");
    }
  });
});
