const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const image= document.querySelector(".image").querySelector("img");

let timer;

const images = [
    "https://picsum.photos/id/237/700/500",
    "https://picsum.photos/id/27/700/500",
    "https://picsum.photos/id/452/700/500",
    "https://picsum.photos/id/1027/700/500",
    "https://picsum.photos/id/841/700/500",
    "https://picsum.photos/id/124/700/500",
    "https://picsum.photos/id/77/700/500",
]
let currentImg = 0;
next.addEventListener("click",()=>{
    clearTimeout(timer);
    currentImg++;
    updateImage();
})

previous.addEventListener("click",()=>{
    clearTimeout(timer);
    currentImg--;
    updateImage();
})

const updateImage=()=>{

    timer = setTimeout(()=>{
        currentImg++;
        updateImage();
    },2000)

    if(currentImg<0){
        currentImg = images.length - 1 ;
    }

    else if(currentImg > images.length - 1){
        currentImg = 0;
    }

    image.src = images[currentImg];
    
}
updateImage();
