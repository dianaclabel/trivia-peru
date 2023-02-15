const temaForm = document.getElementById("form-tema");

temaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const datos = new FormData(temaForm);

  const temaElegido = datos.get("tema");

  alert("tema elegido : " + temaElegido);

  mostrarVistaPreguntas();
});
