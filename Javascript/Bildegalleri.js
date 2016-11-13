//Gjør popup-vinduet synlig og hindrer scrolling av bakgrunnen når popupen er åpen.
function åpenPopup() {
    body = document.getElementsByTagName("body")
    body[0].style.overflow = "hidden"
    document.getElementById("popupId").style.display = "block";
};

//Gjør popup-vinduet usynlig og tillater scrolling av bakgrunnen igjen.
function lukkPopup() {
    body = document.getElementsByTagName("body")
    body[0].style.overflow = "visible"
    document.getElementById("popupId").style.display = "none";
};


//Deklarerer variablen bildeIndex og setter verdien til 1. bildeIndex vil brukes av funksjonene under til å bestemme hvilket bilde som er det som skal vises i galleriet ut fra hvilket bilde man trykker på, eller hvilken retning man blar i galleriet.
let bildeIndex = 1;

//kjører visBilde-funksjonen med bildeIndex en mer i verdi om man trykker neste-knappen, og en mindre i verdi om man trykker forrige-knappen.
function nyttBilde(num) {
    bildeIndex += num
    visBilde(bildeIndex);
};

//kjører visBilde-funksjonen for det bildet man trykker på.
function detteBildet(num) {
    bildeIndex = num
    visBilde(bildeIndex);
};


//Viser bildet i popup-vinduet.
function visBilde(num) {
    
    //deklarerer variabelen "bilder".
    let bilder = document.getElementsByClassName("bilder");
    
    
    //Sjekker om bildeIndex er større enn lengden på div-elementet "bilder", som holder alle bildene som skal vises frem i popupen. Er bildeIndex større blir verdien satt til 1, altså går den til det første elementet i "bilder".
    if (num > bilder.length) {
        bildeIndex = 1;
    }
    
    //Sjekker om bildeIndex er mindre enn 1. Er den det blir bildeIndex satt til lengden på div-elementet "bilder", altså går den til det siste elementet i "bilder".
    if (num < 1) {
        bildeIndex = bilder.length;
    }
    
    
    //Looper gjennom div-elementene "bilder" og gjør alle bildene usynlige ved å endre CSS-en.
    for (i = 0; i < bilder.length; i++) {
        bilder[i].style.display = "none";
    }
    
    
    //Gjør bildet med index en mindre enn bildeIndex synlig ved å endre CSS-en.
    bilder[bildeIndex - 1].style.display = "block";
};