//# createElement
const div = document.createElement('div');
div.innerText = 'Olá devs!';
const div2 = document.createElement('div');
div2.innerText = 'Olá devs2!'

//# append e prepend
//! no final da tag ou no começo
//% append
const body = document.querySelector('body');
body.append(div);

//% prepend
const header = document.querySelector('header');
header.prepend(div2);

