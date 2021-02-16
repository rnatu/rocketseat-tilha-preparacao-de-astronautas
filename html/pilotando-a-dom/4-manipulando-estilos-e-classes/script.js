//# style.atributCss ->

const element1 = document.querySelector('body')

// setando valor
//! é utilizado o estilo camelCase
element1.style.backgroundColor = '#f9f3d2';

//obtendo valor
const bodyBgCollor = element1.style.backgroundColor
console.log(bodyBgCollor)

//# classList
const mainTag = document.querySelector('main')
// classList.add
mainTag.classList.add('active', 'green');
// classList.remove
mainTag.classList.remove('active');

// classList.toggle
//% mainTag.classList.toggle('active');
