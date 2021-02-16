// textContent -> manipulação texto
const element1 = document.querySelector('h1')
console.log(element1.textContent)
element1.textContent = 'Olá Devs!'
element1.textContent += ' Seja Bem-vindo(a)'
console.log('')

// innerText  -> manipulação texto
const element2 = document.querySelector('h2');
console.log(element2.innerText)
element2.innerText = 'Alterado'
element2.innerText += ' Texto concatenado'
console.log('')

// innerHTML  -> manipulação do contéudo HTML
const element3 = document.querySelector('h3');
console.log(element3.innerHTML)
element3.innerHTML = 'Um <br> novo <br> <small>texto</small>'
element3.innerHTML += ' <em>Sou concatenado</em>'
console.log('')

// value -> manipulado o valor
//# elementos que trabalhem com o atributo value
const element4 = document.querySelector('input');
console.log(element4.value)
element4.value = 'Um valor'
element4.value += ' -> concat value'
console.log('')

// Atributos -> manipulando atributos
const element5 = document.querySelector('header');
// setAttribute
element5.setAttribute('class', 'bg header')
// getAttribute
console.log(element5.getAttribute('class'))
// removeAttribute
element5.removeAttribute('class');
console.log(element5)
