let text=document.getElementById("nom");
let para=document.getElementById("citation");
let btn=document.getElementById("btn");
let image=document.getElementById("avatar")

btn.addEventListener('click', marche);

function marche() {
    text.innerHTML="itachi uchiwa";
    para.innerHTML="La connaissance et la conscience sont vagues et il vaut peut-être mieux les appeler illusions.";
    image.setAttribute('src', "itachi.jpg");
}