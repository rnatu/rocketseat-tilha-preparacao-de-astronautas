//# createElement
const div = document.createElement('div');
div.innerText = 'Olá devs!';

//# append e prepend
//! no final da tag ou no começo
//% append
// const body = document.querySelector('body');
// body.append(div);

//% prepend
// const body = document.querySelector('body');
// body.append(div);

//# insertBefore
const body = document.querySelector('body');
const p = body.querySelector('h2');

// argumentos -> elemento a ser inserido, e elemento de referencia
//? no exemplo abaixo: inserir a div antes da tag p
// body.insertBefore(div, p);

//# "insertAfter" (um truque)
body.insertBefore(div, p.nextElementSibling);
