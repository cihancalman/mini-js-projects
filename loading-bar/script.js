const count = document.querySelector(".count");
const bar = document.querySelector(".front");
const title = document.querySelector("title");



let number =  0;
let x = 0;
updateNumber();


function updateNumber(){
    count.textContent = number + "%";
    bar.style.width = `${number}%`;
    number++;
    if(x<3){
       
        title.textContent+=" .";

        x++;
    }
    else{
       
        title.textContent = "Loading";

        x=0;
    }

    if(number<101){
        setTimeout(updateNumber,100);
    }
}