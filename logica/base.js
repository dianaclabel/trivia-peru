const vistaBienvenidaDiv = document.getElementById("vista-bienvenida");
const vistaTemaDiv = document.getElementById("vista-tema")
const vistaPreguntasDiv = document.getElementById("vista-preguntas");

function mostrarVistaBienvenida() {
    vistaBienvenidaDiv.classList.remove("oculto");
    vistaTemaDiv.classList.add("oculto");
    vistaPreguntasDiv.classList.add("oculto");
}

function mostrarVistaTema() {
    vistaTemaDiv.classList.remove("oculto");
    vistaBienvenidaDiv.classList.add("oculto");
    vistaPreguntasDiv.classList.add("oculto");
}

function mostrarVistaPreguntas() {
    vistaBienvenidaDiv.classList.add("oculto");
    vistaTemaDiv.classList.add("oculto")
    vistaPreguntasDiv.classList.remove("oculto");
}
