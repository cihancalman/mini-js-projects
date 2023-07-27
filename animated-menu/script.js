const containers = document.querySelectorAll(".container");
const containerArray = Array.from(containers);





containers.forEach(container =>{
    container.addEventListener("click",()=>{

        container.querySelector(".header").style.left = "-100%";
        container.style.width = "70%"
       
        container.style.cursor = "auto";
        
        const siblings = containerArray.filter((element)=> element!== container);

        siblings.forEach(sibling=>{
            sibling.style.width="10%";
            sibling.style.cursor="pointer";
            sibling.querySelector(".header").style.left = "0";
        })



    })
})