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
