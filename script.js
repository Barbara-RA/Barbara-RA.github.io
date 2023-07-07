function decimalParaBinario(dec){
  return parseInt(dec).toString(2);
}

function decimalParaHexadecimal(dec) {
  return parseInt(dec).toString(16).toUpperCase();
}

function binarioParaDecimal(bin) {
  var dec = 0;
  var pos = 0;

  while (bin > 0) {
      var digito = bin % 10;
      dec += digito * Math.pow(2, pos);
      bin = Math.floor(bin / 10);
      pos++;
  }

  return dec;
}

function hexadecimalParaDecimal(hex) {
  return parseInt(hex, 16);
}

function copiar(componente){
  var copiar = document.getElementById(componente).textContent.split(':')[1].trim();
  navigator.clipboard.writeText(copiar);
}

function copiar2(componente){
  var copiar2 = document.getElementById(componente).value;
  navigator.clipboard.writeText(copiar2);
}