//# parentNode e parentElement
const el1 = document.querySelector('h1');
console.log(el1.parentElement)
console.log(el1.parentNode)
console.log('')

//# Elementos filhos
//% childNodes (NodeList) e children (HTMLCollection)
const el2 = document.querySelector('body')

console.log(el2.childNodes) //NodeList
//? leva em consideração elementos vazios

console.log(el2.children) // HTMLCollection
console.log('')

//% firstChild e firstElementChild
console.log(el2.firstChild)
//? leva em consideração elementos vazios

console.log(el2.firstElementChild)
console.log('')

//% lastChild e lastElementChild
console.log('lastChild e lastElementChild')
console.log(el2.lastChild)
//? leva em consideração elementos vazios

console.log(el2.lastElementChild)
console.log('')

// # Elemento irmão
const el3 = document.querySelector('h2')

// % nextSibling e nextElementSibling
console.log(el3.nextSibling)
//? leva em consideração elementos vazios

console.log(el3.nextElementSibling)
console.log('')

// % previousSibling e previousElementSibling
console.log(el3.previousSibling)
//? leva em consideração elementos vazios

console.log(el3.previousElementSibling)
console.log('')
