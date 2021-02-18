//# eventos via HTML
function print() {
  console.log('print')
}

//# Eventos de teclado
const input = document.querySelector('input');

input.onkeypress = function(e) {
  console.log('apertei a tecla');
}
//! no final da tag ou no começo
//% append
