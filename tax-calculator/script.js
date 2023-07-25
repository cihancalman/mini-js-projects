const araToplam = document.getElementById("araToplam");
const vergiToplam = document.getElementById("vergiTutar");
const genelToplam = document.getElementById("genelTutar");
const radioButtons = document.querySelectorAll('input[name="btnradio"]');
const kdv = document.getElementById("vergiOrani");
const tutar = document.getElementById("tutarText");
const sumButton = document.getElementById("hesapla");

kdv.value = 8;
tutar.value = 100;


const kdvHesapla = (tutarx,kdvx) =>{
let genel = tutarx*(1+(kdvx/100));
let vergi = genel - tutarx;

araToplam.innerText = `₺${tutarx}`;
vergiToplam.innerText=`₺${vergi}`;
genelToplam.innerText = `₺${genel}`;
}


const kdvSec = ()=>{
    let selected = document.querySelector('input[name="btnradio"]:checked');
    
    
    kdv.value = selected.value;
    kdv.focus();
        
        
    
}

radioButtons.forEach(button =>{
    button.addEventListener("change",kdvSec);
})



sumButton.addEventListener("click",function(){
    kdvHesapla(tutar.value,kdv.value);
    preventDefault();
});

