// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let amigos = [];//Array para almacenar los nombres

//Funcion para agregar nombres desde el boton anadir
function agregarAmigo(){
    let nombredeAmigos = document.getElementById('amigo').value.trim();//captura el valor del campo de entrada
    //validar la entrada
    if (nombredeAmigos !== ""){
        amigos.push(nombredeAmigos);//Actualiza el array de amigos
        limpiarCaja();
        actualizarLista();
        console.log(amigos);
    } else{
        alert("Por favor, inserte un nombre.");//Mensaje de alerta para que ingrese un nombre
        return;
    }
}
//Actualiza y muestra amigos
function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";// Limpiamos la lista
    // Recorremos el array amigos y creamos la lista de nombres
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); 
        item.textContent = amigos[i]; 
        lista.appendChild(item); 
    }
}
function sortearAmigo(){
     if (amigos.length === 0) {
    alert("No hay amigos para sortear. Por favor, ingrese algunos nombres.");
    return; //Salir si la lista está vacía
  }
    const nombreAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[nombreAleatorio]; //Obtenemos el numero sorteado

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `<li><strong>Amigo sorteado:</strong> ${amigoSorteado}</li>`;//Imprimo en pantalla el nombre
}
function limpiarCaja(){
    document.getElementById("amigo").value = "";//Limpia el campo de entrada
}