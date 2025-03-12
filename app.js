// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const newAmigo = document.getElementById("amigo")
const botonAdd = document.getElementById("boton-add")
const listaAmigos = document.getElementById("listaAmigos")
const botonSortear = document.getElementById("boton-sortear")
const resultado = document.getElementById("resultado");
let amigos = [];
let amigoGanador; 

botonAdd.addEventListener("click", function() {
    console.log(newAmigo.value)
    newAmigo.value !== "" ? amigos.push(newAmigo.value) : alert("Ingrese un nombre valido");
    newAmigo.value = "";
    actualizarLista();
});

botonSortear.addEventListener("click", function() {
    sortearAmigos(amigos);
    listaAmigos.innerHTML = ""; 
    amigos.length == 0 ? resultado.innerHTML = "" : resultado.innerHTML = `El amigo secreto es: ${amigos[amigoGanador]}`
})

function actualizarLista() {
    listaAmigos.innerHTML = ""; 
    amigos.forEach(amigo => {
        const li = document.createElement("li"); 
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigos(amigos) {
    amigos.length == 0 ? alert("La lista esta vacia") : amigoGanador = Math.floor(Math.random() * amigos.length);
    return amigoGanador
}