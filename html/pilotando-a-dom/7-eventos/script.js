//# eventos via HTML
function print() {
  console.log('print')
}

//# Eventos de teclado
const input = document.querySelector('input');

input.onkeypress = function(e) {
  console.log('apertei a tecla');
}

//# Adicionando eventos via JS (método 1) RECOMENDADO
const p = document.querySelector('p');

// argumentos ('qual evento', callbackfn)
p.addEventListener('click', print)

//# Adicionando eventos via JS (método 2)
const h2 = document.querySelector('h2');

h2.onclick = function() {
  console.log('click ativado')
}

/* o método 1 permite varios addEventListener para
o mesmo elemento
Já o método 2, como ele sempre recebe uma função, se for utilizado mais de um "onclick" por exemplo, ele irá sobrescrever, executando apenas o ultimo "onclick"

Aula -> Adicionando eventos via JS (outro método)
*/
