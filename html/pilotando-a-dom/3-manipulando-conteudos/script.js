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
