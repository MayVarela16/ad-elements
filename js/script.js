 // Aquí tu código
 
 const botonAgregar= document.getElementById("agregar");
 const lista= document.getElementById("lista");

 botonAgregar.addEventListener("click", () => {
     const elemento= prompt("escribe un Elemento:");
         

         lista.appendChild(nuevoElemento);
});
