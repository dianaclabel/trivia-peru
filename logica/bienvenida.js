const bienvenidaForm = document.getElementById("form-bienvenida");
const usuarioSpans = document.getElementsByClassName("usuario");


bienvenidaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const datos = new FormData(bienvenidaForm);

  const nombreUsuario = datos.get("nombreUsuario");

  alert("Bienvenida, " + nombreUsuario);

  for( let usuarioSpan of usuarioSpans){
    usuarioSpan.innerText = nombreUsuario;
  }

  mostrarVistaTema();
});
