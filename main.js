const myButton = document.querySelector('.fa-bars')
const nav = document.querySelector('.tablet')
const closeButton = document.getElementById('close')

myButton.addEventListener('click', ()=>{
    nav.style.display = 'flex'
})

closeButton.addEventListener('click', ()=>{
    nav.style.display = 'none'
} )