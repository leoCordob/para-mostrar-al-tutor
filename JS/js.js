var nombre = prompt ("¿Como te llamas?")
 if (nombre == ""){
    alert ("por favor, ingrese su nombre")
    var nombre = prompt ("ingresa tu nombre")
 } 


var respuesta = prompt ("¿te gusta el arte?")

while(respuesta != "si"){
    alert ("¿COMO QUE NO TE GUSTA EL ARTE?")
   var respuesta = prompt ("¿te gusta el arte?")
  }  
if(respuesta=="si"){
    alert ("Bienvenido a mi sitio web de arte entonces, "+nombre)
}
let artistas = []
for(let i = 1; i<=3; i++ ){
   
    artistas.push(prompt("que artista te gusta?"))
}
alert ("asi que te gustan " + artistas.join(", ") + " " +"a mi tambien!")
if ((artistas.join(",")).length<=5){
   let nuevoTexto= document.getElementById("modificadoConDom")
    nuevoTexto.innerHTML = " <h2>Those short names are for real? Come on, refresh the page and tell me real names of the artist that you like</h2>"
}

if(artistas[2].length/2 != 0){
    prompt("¿quien es"+ " " +artistas[2]+ "?")
}