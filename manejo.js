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
