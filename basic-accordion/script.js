const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion =>{

    const accordionButton = accordion.querySelector(".accordionButton");
    accordionButton.addEventListener("click",()=>{

        accordionButton.querySelector(".minusIcon").classList.toggle("invisible");
        accordionButton.querySelector(".plusIcon").classList.toggle("invisible");
        accordion.querySelector(".accordionContent").classList.toggle("invisible");



    })
})