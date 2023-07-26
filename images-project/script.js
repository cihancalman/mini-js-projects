const APIkey = "";// unsplash.com api key
const count = 30;
const url = `https://api.unsplash.com/photos/random/?client_id=${APIkey}&count=${count}`;
const imagesDiv = document.querySelector(".images-div");

let images = [];

async function getImages(){
    try{

        const response = await fetch(url);
        images = await response.json();
        
        showImages();
    }
    catch(error){
        console.log(error);
    }
}

function showImages(){

images.forEach(image=>{
    const item = document.createElement("a");
    item.setAttribute("href",image.urls.full);

    const img = document.createElement("img");
    img.setAttribute("src",image.urls.regular);
    img.setAttribute("alt",image.urls.regular);

    item.appendChild(img);
    imagesDiv.appendChild(item);
    

})
}

window.addEventListener("scroll",()=>{
    if(window.scrollY + window.innerHeight >= document.body.offsetHeight){
        getImages();
    }
})




getImages();
