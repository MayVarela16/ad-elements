 // Aquí tu código
 
 const boton= document.getElementById("agregar");
 const lista= document.getElementById("lista");

 boton.addEventListener("click", () => {
    const nuevoElemento = prompt("Agregar elemento:");
    if (nuevoElemento) {
      agregarElementoALista(nuevoElemento);
    }
  });



function agregarElementoALista(texto) {
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = texto;
    lista.appendChild(nuevoItem);
  };
