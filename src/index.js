
let cifrar = document.getElementById('btncifrar'); 
let descifrar = document.getElementById('btndescifrar');

function fcifrar () {
    let textarea = document.getElementById('textareaHTML').value;
    let offset = parseInt(document.getElementById('offsetHTML').value);
    let resultadoCifrado = cipher.encode(textarea, offset);
    document.getElementById("textareaHTML").value=resultadoCifrado;

   // console.log(resultadoCifrado);
   //console.log(textarea);
   // console.log(offset);
}

function fdescifrar () {
let textarea2 = document.getElementById('textareaHTML').value;
let offset = parseInt(document.getElementById('offsetHTML').value);
let resultadoDescifrado = cipher.decode(textarea2, offset);
document.getElementById("textareaHTML").value=resultadoDescifrado;
}

cifrar.addEventListener('click', fcifrar);
descifrar.addEventListener('click', fdescifrar);

// Botones 

let reset = document.getElementById('btnlimpiar');
reset.addEventListener('click', limpiar);
function limpiar() {
document.getElementById("textareaHTML").value="";
}

let reset2 = document.getElementById('btnlimpiar2');
reset2.addEventListener('click', limpiar2);
function limpiar2() {
document.getElementById("textareaHTML2").value="";
}

// Páginas 

let inicio = document.getElementById('pinicio');
inicio.addEventListener('click', mostrarInicio);

function mostrarInicio () {
document.getElementById("instrucciones").style.display="none";
document.getElementById("inicio").style.display="block";

}

let descifratucarta = document.getElementById('pdescifratucarta');
descifratucarta.addEventListener('click', mostrarDescifratucarta);

function mostrarDescifratucarta () {
    document.getElementById("inicio").style.display="none";
document.getElementById("descifratucarta").style.display="block";

}

