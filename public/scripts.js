const modalOverlay = document.querySelector('.modal-overlay')

// == Active Modal

const buttonIntro = document.querySelector('.planINTRObutton')

const buttonPopular = document.querySelector('.planpopularbutton')

const buttonBase = document.querySelector('.planbasebutton')

buttonIntro.addEventListener("click",function(){
    modalOverlay.classList.add('active')
})
buttonPopular.addEventListener("click",function(){
    modalOverlay.classList.add('active')
})
buttonBase.addEventListener("click",function(){
    modalOverlay.classList.add('active')
})


// == Remove Modal

document.querySelector(".close-modal").addEventListener("click",function(){
    modalOverlay.classList.remove("active")
})
