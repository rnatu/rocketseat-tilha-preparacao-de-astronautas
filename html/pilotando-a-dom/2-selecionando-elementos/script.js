// getElementById() -> busca pelo nome do id
const element1 = document.getElementById('blog-title')
console.log('getElementById')
console.log(element1)
console.log('')

// getElementsByClassName() -> busca pelo nome da class
const element2 = document.getElementsByClassName('one')
console.log('getElementsByClassName')
console.log(element2)
console.log('')

// getElementsByTagName() -> busca pelo nome da tag
const element3 = document.getElementsByTagName('h1');
console.log('getElementsByTagName')
console.log(element3)
console.log('')

// querySelector() -> busca pelo seletor
const element4 = document.querySelector('[src]');
console.log('uerySelector')
console.log(element4)
console.log('')

// querySelectorAll() -> busca por todos seletores
//# retorna um NodeList, possibilitando utilização de métodos array
const elements5 = document.querySelectorAll('.one');
console.log('querySelectorAll')
console.log(elements5)
console.log('')

elements5.forEach(el => console.log(el));
