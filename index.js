const button = document.querySelector("button");
const modal = document.querySelector('.modal');
const close = document.querySelector(".fa-xmark");
const mainContainer = document.querySelector(".main_container");

button.addEventListener("click",(e)=>{
    e.stopPropagation();
  modal.classList.add("display_block");
})

close.addEventListener("click",()=>{
    modal.classList.remove("display_block");
})

mainContainer.addEventListener("click",()=>{
    modal.classList.remove("display_block");
})