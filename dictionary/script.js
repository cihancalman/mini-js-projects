const word = document.getElementById("word");
const translateButton = document.getElementById("translate");
const meaningDiv = document.querySelector(".meaningDiv");
const translatedWord = document.querySelector("#translatedWord");
const meaning = document.querySelector("#meaning");
const audio = document.querySelector("audio");


async function translate(){
    meaningDiv.style.display = "none";

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`;
    const result = await fetch(url).then(response=> response.json());
   
    if(result.title){

    }
    else{
        console.log(result);
        meaningDiv.style.display = "block";
        translatedWord.innerText = result[0].word;
        meaning.innerText = result[0].meanings[0].definitions[0].definition;
        audio.src = result[0].phonetics[0].audio;
    }


}





translateButton.addEventListener("click",translate);