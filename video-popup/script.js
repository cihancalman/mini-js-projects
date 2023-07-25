const watch = document.querySelector("button");
const popup = document.querySelector(".popup");
const close = popup.querySelector("i");

watch.addEventListener("click",()=>{
    popup.style.visibility ="visible";
    console.log(popup.style.visibility);
})

close.addEventListener("click",()=>{
    popup.style.visibility ="hidden";
})