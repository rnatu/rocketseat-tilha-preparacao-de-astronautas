//# parentNode e parentElement
const el1 = document.querySelector('h1');
console.log(el1.parentElement)
console.log(el1.parentNode)
console.log('')

//# elementos filhos
//% childNodes (NodeList) e children (HTMLCollection)
const el2 = document.querySelector('body')

console.log(el2.childNodes) //NodeList
//? leva em consideração elementos vazios

console.log(el2.children) // HTMLCollection
console.log('')

//% firstChild e firstElementChild
console.log(el2.firstChild) //NodeList
//? leva em consideração elementos vazios

console.log(el2.firstElementChild) // HTMLCollection
console.log('')

//% lastChild e lastElementChild
console.log('lastChild e lastElementChild')
console.log(el2.lastChild) //NodeList
//? leva em consideração elementos vazios

console.log(el2.lastElementChild) // HTMLCollection
console.log('')
