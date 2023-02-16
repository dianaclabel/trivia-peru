const temaForm = document.getElementById("form-tema");

temaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const datos = new FormData(temaForm);

  // valor obtenido en el name tema
  const temaElegido = datos.get("tema");

  alert("tema elegido : " + temaElegido);

  mostrarVistaPreguntas();
});
