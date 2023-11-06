 // Aquí tu código
 
 function addElements() {
    const nuevoElemento= prompt("Escriba un elemento:");
    const lista= document.getElementById("lista");
    const elementoLista= document.createElement("li");

    elementoLista.textContent= nuevoElemento;
    lista.appendChild(elementoLista);
}

const botonAgregar= document.getElementById("Agregar");
 botonAgregar.addEventListener("click", agregarElemento);

 console.log(addElements());