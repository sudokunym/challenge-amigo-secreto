// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// HTML Elements (id's): amigo, listaAmigos, resultado


function agregarAmigo() {
    // console.log(`Amigo agregado: ${nombre}`);

    // Capturar el valor del campo de entrada:
    let inputNuevo = document.querySelector("#amigo");
    let nombre = inputNuevo.value.trim(); // Limpia espacios al inicio y al final
    
    // Validar la entrada:
    if (nombre === "") {
        resultado.textContent = "Por favor, inserte un nombre.";
        return;
    }

    // Actualizar el array de amigos:
    amigos.push(nombre);

    // Limpiar el campo de entrada:
    inputNuevo.value = "";
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    // Obtener el elemento de la lista:
    let listaAmigos = document.querySelector("#listaAmigos");
    
    // Limpiar la lista existente:
    listaAmigos.innerHTML = "";

    /* Iterar sobre el arreglo:
    - El loop empieza en 0, se repite una vez por c/amigo
    - i representa la posición actual en el arreglo
    - Cada iteración crea un nuevo <li> y lo agrega a la lista
    */
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Esto crea un nuevo elemento de lista
        li.textContent = amigos[i]; // Esto asigna el nombre actual al elemento de lista
        listaAmigos.appendChild(li); // Agregar elementos a la lista
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles:
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    
    // Generar un índice aleatorio:
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado:
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado:
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}