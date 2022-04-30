let nombreLibro = prompt ("Ingrese el libro que desee comprar")
let resultado = nombreLibro
let textoConcatenar = " "

while (textoConcatenar != "Nada mas") {
 textoConcatenar= prompt("Ingrese el siguiente libro que desea");
 resultado = resultado + " " + textoConcatenar;
 console.log (resultado);
}