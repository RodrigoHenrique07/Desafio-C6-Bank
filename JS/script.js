
// ATIVAR DE DESATIVAR BOTÃO CLIENTE
const btnClient = document.querySelectorAll('.js-btn');

btnClient.forEach(item => {
    item.addEventListener('click', ()=> {
        btnClient.forEach(itemRemove => {
            itemRemove.classList.remove('active')
        })
        item.classList.add('active')
    })
})

// MENU FIXO
const header = document.getElementById('js-header')
function menuFixo(){
    let positionPage = window.pageYOffset;
    
    if(positionPage > 670){
        header.classList.add('menuFixed')
    }
    else{
        header.classList.remove('menuFixed')
    }
}

document.addEventListener('scroll', menuFixo)

// DROPDOWN 



const btnDropdown = document.querySelectorAll('.js-ul-dropdown li a');
const dropdown = document.querySelector('.js-dropdown')

function openDropdown (){
    dropdown.classList.toggle('active')
}
btnDropdown.forEach(i => {
    i.addEventListener('click', (event)=>{
        event.preventDefault()
        i.nextElementSibling.classList.toggle('active')
        openDropdown()
    })
})

// MODAL

const modal = document.querySelector('.js-btn-mobile')
const overleyMenu = document.querySelector('.js-overley')


function openModal (event) {
    event.preventDefault()
    document.documentElement.classList.toggle('menu-opened')
}

modal.addEventListener('click', openModal)
overleyMenu.addEventListener('click', openModal)








// ANIMAÇÕES COM AOS

AOS.init({
    duration: 1000,
    once: true
});