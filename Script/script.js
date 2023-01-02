/* 

orden en el cual el programa revisa

e --> enter
o --> ober
i --> imes
a --> ai
u --> ufat

*/

function encriptar() {

    var texto = document.getElementById("textinput").value.toLowerCase();


//i para que tanto mayusculas como minusculas sean afectadas -- e else {}
//g es para toda la linea o parrafo
//m es para que afecte a multiples lineas o parrafo

    var textCifrado = texto.replace(/e/igm,"enter")
    var textCifrado = textCifrado.replace(/o/igm,"ober")
    var textCifrado = textCifrado.replace(/i/igm,"imes")
    var textCifrado = textCifrado.replace(/a/igm,"ai")
    var textCifrado = textCifrado.replace(/u/igm,"ufat")

    document.getElementById("img_left").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").innerHTML = textCifrado;
    document.getElementById("copy1").style.display = "show";
    document.getElementById("copy1").style.display = "inherit";
}


function desencriptar() {

    var texto = document.getElementById("textinput").value.toLowerCase();


//i para que tanto mayusculas como minusculas sean afectadas -- e else {}
//g es para toda la linea o parrafo
//m es para que afecte a multiples lineas o parrafo

    var textCifrado = texto.replace(/enter/igm,"e")
    var textCifrado = textCifrado.replace(/ober/igm,"o")
    var textCifrado = textCifrado.replace(/imes/igm,"i")
    var textCifrado = textCifrado.replace(/ai/igm,"a")
    var textCifrado = textCifrado.replace(/ufat/igm,"u")

    document.getElementById("img_left").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").innerHTML = textCifrado;
    document.getElementById("copy1").style.display = "show";
    document.getElementById("copy1").style.display = "inherit";
}


function copytxt() {


    var content = document.querySelector("#text2")

    content.select();
    document.execCommand("copy")
    alert("Se copio la palara/parrafo!")
}



