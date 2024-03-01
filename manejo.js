function posteo() {
    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;

    const divContenedor = document.createElement("div");
    const idUnico = generarIdUnico(); // Generar un ID único aleatorio
    divContenedor.id = idUnico;
    divContenedor.classList.add("posteo");

    const tituloElemento = document.createElement("h3");
    tituloElemento.textContent = titulo;

    const descripcionElemento = document.createElement("p");
    descripcionElemento.textContent = descripcion;

    // Crear el botón de eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function() {
        eliminarPublicacion(idUnico); // Pasar el ID único al eliminarPublicacion
    });

    divContenedor.appendChild(tituloElemento);
    divContenedor.appendChild(descripcionElemento);
    divContenedor.appendChild(botonEliminar);

    // Agregar el div del posteo al contenedor de publicaciones
    const contenedor = document.getElementById("publicaciones");
    contenedor.appendChild(divContenedor);
}

function eliminarPublicacion(idPublicacion) {
    const publicacion = document.getElementById(idPublicacion);
    if (publicacion) {
        publicacion.remove();
    }
}

// Función para generar un ID único aleatorio
function generarIdUnico() {
    return 'id-' + Math.random().toString(36);
}

//logica del formulario

function enviar() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const comentarios = document.getElementById("comentarios").value;

    const cajaFinal = document.createElement("div");
    cajaFinal.id = "cajaFinal";

    const mensajeCajaFinal = document.createElement("label");
    mensajeCajaFinal.textContent = "Sus datos junto con su reseña fueron enviados exitosamente, gracias por usar esta herramienta.";

    cajaFinal.appendChild(mensajeCajaFinal);

    // Obtener el elemento contenedor para la encuesta y agregar la caja final
    const encuesta = document.querySelector('.mensajeEncuesta');
    encuesta.appendChild(cajaFinal);

    setTimeout(function() {
        cajaFinal.style.display = 'none';
    }, 4000);
}
