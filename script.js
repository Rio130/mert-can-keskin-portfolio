// Meslek yazısı

const meslek = document.querySelector("#meslek");


let yazilar = [
    "Frontend Developer | React & JavaScript",
    "Modern Web Arayüzleri Geliştiriyorum",
    "HTML CSS JavaScript ile Projeler Üretiyorum",
    "Kullanıcı Odaklı Web Deneyimleri Tasarlıyorum"
];


let index = 0;


if(meslek){

setInterval(()=>{

    meslek.innerHTML = yazilar[index];

    index++;

    if(index >= yazilar.length){
        index = 0;
    }

},2500);

}





// Dark Mode

const temaBtn = document.querySelector("#temaBtn");


if(temaBtn){

temaBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");


if(document.body.classList.contains("dark")){

temaBtn.innerHTML="☀️ Light Mode";

}else{

temaBtn.innerHTML="🌙 Dark Mode";

}

});

}