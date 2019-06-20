window.cipher = {

  encode (textarea, offset) {

    let resultadoCifrado = '';

      for (let i=0; i < textarea.length; i++) {
      
      let texto = textarea[i].charCodeAt(0);
      let ASCII = (texto - 65 + offset) % 26 + 65;
      let textoCifrado = String.fromCharCode(ASCII);
      
      resultadoCifrado += textoCifrado;
     // console.log(resultadoCifrado); 
     // console.log(offset);    
  }
  return resultadoCifrado; 
},

  decode (textarea2, offset) {

    let resultadoDescifrado = '';

      for (let i=0; i < textarea2.length; i++) {
      
      let texto = textarea2[i].charCodeAt(0);
      let ASCII = (texto - 13 - offset) % 26 + 65;
      let textoDescifrado = String.fromCharCode(ASCII);
      
      resultadoDescifrado += textoDescifrado;

      // console.log(resultadoDescifrado); 
      // console.log(offset);
}
return resultadoDescifrado; 
}};
