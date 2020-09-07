const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")
const modalmaximize = document.querySelector(".modal")

for(let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
    
    
    
    }) // Habilitar todos os cards para serem clicados e abrir o modal
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src =""

}) //Botão de Fechar removendo o active


document.querySelector(".resize-modal").addEventListener("click", function(){
    modalmaximize.classList.toggle("maximize")
    

})