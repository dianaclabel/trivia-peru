const preguntasForm = document.getElementById("form-preguntas");

preguntasForm.onsubmit = function(event) {
  event.preventDefault();

  const datos = new FormData(preguntasForm);

  const respuesta1 = datos.get("pregunta1");
  const respuesta2 = datos.get("pregunta2");
  const respuesta3 = datos.get("pregunta3");

  if (respuesta1 === "Lima") {
    alert("Respuesta 1 es correcta");
  } else {
    alert("Respuesta 1 es incorrecta");
  }

  if (respuesta2 === "Ica") {
    alert("Respuesta 2 es correcta");
  } else {
    alert("Respuesta 2 es incorrecta");
  }

  if (respuesta3 === "24") {
    alert("Respuesta 3 es correcta");
  } else {
    alert("Respuesta 3 es incorrecta");
  }

 // alert(respuesta1 + " " + respuesta2 + " " + respuesta3);


  // let opcionmarcada1;
  // let opcionmarcada2;
  // let opcionmarcada3;


  // let opciones1 = document.getElementsByName("pregunta1");
  // for (let opcion1 of opciones1) {
  //   if (opcion1.checked) {
  //     opcionmarcada1 = opcion1.value;

  //     if (opcion1.value === "Lima") {
  //       alert("Respuesta 1 es correcta");
  //     } else {
  //       alert("Respuesta 1 es incorrecta");
  //     }
  //   }
  // }

  // let opciones2 = document.getElementsByName("pregunta2");
  // for (let opcion2 of opciones2) {
  //   if (opcion2.checked) {
  //     opcionmarcada2 = opcion2.value;

  //     if (opcion2.value === "Ica") {
  //       alert("Respuesta 2 es correcta");
  //     } else {
  //       alert("Respuesta 2 es incorrecta");
  //     }
  //   }
  // }

  // let opciones3 = document.getElementsByName("pregunta3");
  // for (let opcion3 of opciones3) {
  //   if (opcion3.checked) {
  //     opcionmarcada3 = opcion3.value;

  //     if (opcion3.value === "24") {
  //       alert("Respuesta 3 es correcta");
  //     } else {
  //       alert("Respuesta 3 es incorrecta");
  //     }
  //   }
  // }

  // alert(opcionmarcada1 + ", " + opcionmarcada2 + " y " + opcionmarcada3);
}






