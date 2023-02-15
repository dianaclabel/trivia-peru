document.getElementById('button-form').onclick = function() {
  let opcionmarcada1;
  let opcionmarcada2;
  let opcionmarcada3;
//let respuestaCorrectas = [];
//let respuestasIncorrectas = []; 
  
  let opciones1 = document.getElementsByName('q1');
  for (let opcion1 of opciones1) {
    if (opcion1.checked) {
      opcionmarcada1 = opcion1.value;
      
      if(opcion1.value === "Lima"){
        alert("Respuesta 1 es correcta");
      }else{
        alert("Respuesta 1 es incorrecta");
      }
    }
  }

  let opciones2 = document.getElementsByName('q2');
  for (let opcion2 of opciones2) {
    if (opcion2.checked) {
      opcionmarcada2 = opcion2.value;
      
      if(opcion2.value === "Ica"){
        alert("Respuesta 2 es correcto");
      }else{
        alert("Respuesta 2 es incorrecta");
      }
    }
  }

  let opciones3 = document.getElementsByName('q3');
  for (let opcion3 of opciones3) {
    if (opcion3.checked) {
      opcionmarcada3 = opcion3.value;
      
      if(opcion3.value === "24"){
        alert("Respuesta 3 es correcto");
      }else{
        alert("Respuesta 3 es incorrecta");
      }
    }
  }
  //alert(opcionmarcada1 + ", " + opcionmarcada2 + " y " + opcionmarcada3);
  // alert( respuesta1 + " " respuesta2);

}






