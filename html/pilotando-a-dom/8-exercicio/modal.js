const button = document.querySelector('#openModal');

const modal = document.querySelector('.modal-wrapper')

button.addEventListener('click', function() {
  modal.classList.remove('invisible');
})

document.addEventListener('keydown', event => {
  const isEscKey = event.key === 'Escape'

  if(isEscKey && !modal.classList.contains('invisible')) modal.classList.add('invisible');
})
