const side = document.querySelector(".side-bar");
const bar = document.querySelector(".fa-bars");
const close = document.querySelector("#closeSide");


bar.addEventListener("click",()=>{
    side.classList.toggle("show-sidebar");
})

close.addEventListener("click",()=>{
    side.classList.remove("show-sidebar");
})