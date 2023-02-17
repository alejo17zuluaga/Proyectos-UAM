console.log("Entramos");

var items = document.getElementsByClassName("item");

var cantidad = items.length; // -> 3

console.log(cantidad); 

console.log("cantidad de listas" + cantidad);


var div = document.createElement("div");

div.innerText = "Aprendiendo JavaScript";

var divUno = document.getElementById("uno");

divUno.appendChild(div);

var lista = document.getElementById("lista");

var hijo = document.createElement("li");
hijo.innerText = "li nuevo";
lista.appendChild(hijo);

var divTres = document.getElementById("tres").style.color="red";
var divTres = document.getElementById("lista").style.color="green";
