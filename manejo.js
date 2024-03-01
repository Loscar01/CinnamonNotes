console.log("El script manejo.js se ha cargado correctamente.");

function posteo() {

    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;

    const divContenedor = document.createElement("div");
    const idUnico = generarIdUnico(); 
    divContenedor.id = idUnico;
    divContenedor.classList.add("posteo");

    const tituloElemento = document.createElement("h3");
    tituloElemento.textContent = titulo;

    const descripcionElemento = document.createElement("p");
    descripcionElemento.textContent = descripcion;

    /*const datosUsuario = document.createElement("p");
    datosUsuario.textContent = "Usuario: " + obtenerDatosUsuario();*/

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar nota";
    botonEliminar.id = "deleteBt"
    botonEliminar.addEventListener("click", function() {
        eliminarPublicacion(idUnico); 
    });

    divContenedor.appendChild(tituloElemento);
    divContenedor.appendChild(descripcionElemento);
    divContenedor.appendChild(botonEliminar);
    //divContenedor.appendChild(datosUsuario);
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



function obtenerDatosUsuario() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;

    let divContenedor = document.getElementById("datosUser")
    let cadenaM = nombre.toUpperCase()
    let cadena_m= nombre.toLowerCase()
    if (cadenaM.includes("CACA") || cadena_m.includes("caca") || nombre.includes("Caca")) {
        alert("No te puedes llamar "+ nombre + ",introduce otro nombre.")
        return
    }
    

    if (!divContenedor) { // Verifica si el elemento con el ID "datosUser" no existe
        alert("El contendor 'datosUser' no existe!");
        return;
    }

    if (nombre.trim() === "" || apellido.trim() === "" || email.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return; 
    }


    const nombreElement = document.createElement("p");
    nombreElement.textContent = "Nombre: " + nombre;

    const apellidoElement = document.createElement("p");
    apellidoElement.textContent = "Apellido: " + apellido;

    const emailElement = document.createElement("p");
    emailElement.textContent = "Email: " + email;

    divContenedor.appendChild(nombreElement);
    divContenedor.appendChild(apellidoElement);
    divContenedor.appendChild(emailElement);

    alert("Datos enviados correctamente.");
    
}



    
    

    





