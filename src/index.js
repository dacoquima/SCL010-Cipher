
let cifrar = document.getElementById('btncifrar'); 
let descifrar = document.getElementById('btndescifrar');

function fcifrar () {
    let textarea = document.getElementById('textareaHTML').value;
    let offset = parseInt(document.getElementById('offsetHTML').value);
    let resultadoCifrado = cipher.encode(textarea, offset);
    document.getElementById("resultado").innerHTML=resultadoCifrado;
    console.log(resultadoCifrado);
console.log(textarea);
console.log(offset);
}

function fdescifrar () {
let textarea2 = document.getElementById('textareaHTML2').value;
let offset = parseInt(document.getElementById('offsetHTML').value);
let resultadoDescifrado = cipher.decode(textarea2, offset);
}

cifrar.addEventListener('click', fcifrar);
descifrar.addEventListener('click', fdescifrar);

// Páginas 

let inicio = document.getElementById('pinicio');
inicio.addEventListener('click', mostrarInicio);

function mostrarInicio () {
document.getElementById("instrucciones").style.display="none";
document.getElementById("descifratucarta").style.display="none";
document.getElementById("cuidados").style.display="none";
document.getElementById("doulas").style.display="none";
document.getElementById("testimonios").style.display="none";

document.getElementById("inicio").style.display="block";

}

let instrucciones = document.getElementById('pinstrucciones');
instrucciones.addEventListener('click', mostrarInstrucciones);

function mostrarInstrucciones () {
document.getElementById("inicio").style.display="none";
document.getElementById("descifratucarta").style.display="none";
document.getElementById("cuidados").style.display="none";
document.getElementById("doulas").style.display="none";
document.getElementById("testimonios").style.display="none";

document.getElementById("instrucciones").style.display="block";

}

let descifratucarta = document.getElementById('pdescifratucarta');
descifratucarta.addEventListener('click', mostrarDescifratucarta);

function mostrarDescifratucarta () {
    document.getElementById("inicio").style.display="none";
    document.getElementById("instrucciones").style.display="none";
    document.getElementById("cuidados").style.display="none";
    document.getElementById("doulas").style.display="none";
    document.getElementById("testimonios").style.display="none";
document.getElementById("descifratucarta").style.display="block";

}

let cuidados = document.getElementById('pcuidados');
cuidados.addEventListener('click', mostrarCuidados);

function mostrarCuidados () {
    document.getElementById("inicio").style.display="none";
    document.getElementById("instrucciones").style.display="none";
    document.getElementById("descifratucarta").style.display="none";
    document.getElementById("doulas").style.display="none";
    document.getElementById("testimonios").style.display="none";

document.getElementById("cuidados").style.display="block";

}

let doulas = document.getElementById('pdoulas');
doulas.addEventListener('click', mostrarDoulas);

function mostrarDoulas () {
    document.getElementById("inicio").style.display="none";
    document.getElementById("instrucciones").style.display="none";
    document.getElementById("descifratucarta").style.display="none";
    document.getElementById("cuidados").style.display="none";
    document.getElementById("testimonios").style.display="none";

document.getElementById("doulas").style.display="block";

}

let testimonios = document.getElementById('ptestimonios');
testimonios.addEventListener('click', mostrarTestimonios);

function mostrarTestimonios () {
    document.getElementById("inicio").style.display="none";
    document.getElementById("instrucciones").style.display="none";
    document.getElementById("descifratucarta").style.display="none";
    document.getElementById("cuidados").style.display="none";
    document.getElementById("doulas").style.display="none";

document.getElementById("testimonios").style.display="block";

}