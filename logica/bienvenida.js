const bienvenidaForm = document.getElementById("form-bienvenida");

bienvenidaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const datos = new FormData(bienvenidaForm);

  const nombreUsuario = datos.get("nombreUsuario");

  alert("Bienvenida, " + nombreUsuario);

  mostrarVistaTema();
});
