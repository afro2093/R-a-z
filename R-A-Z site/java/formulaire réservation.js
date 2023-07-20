let resultat = document.getElementById("resultat");
let option1Cochee = document.getElementById("option1");
let option2Cochee = document.getElementById("option2");
let nombresAdultes = document.getElementById("nombresAdultes");
let nombresEnfants = document.getElementById("nombresEnfants");
let datepicker = document.getElementById("datepicker");
let datepicker2 = document.getElementById("datepicker2");
let uidatepickerdiv = document.getElementById("ui-datepicker-div");
let personnages = document.getElementById("personnages");

let RBarbie = document.getElementById("RBarbie");
let RBatman = document.getElementById("RBatman");
let RBulma = document.getElementById("RBulma");
let RHarryPotter = document.getElementById("RHarryPotter");
let RSonic = document.getElementById("RSonic");


function datediff(first, second) {        
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}


function parseDate(str) {
    var mdy = str.split('/');
    console.log(mdy);
    return new Date(mdy[2], mdy[1] - 1, mdy[0]);
}


function calculerTotal() {
    let nombreDeNuits = datediff(parseDate(datepicker.value), parseDate(datepicker2.value));
    let total = 0;
    let prixParNuit = 0;

    switch (personnages.value) {
        case "RBarbie":
            prixParNuit = 70;
            break;
        case "RBatman":
            prixParNuit = 100
            break;
        case "RBulma":
            prixParNuit = 9000
            break;
        case "RHarryPotter":
            prixParNuit = 5
            break;
        case "RSonic":
            prixParNuit = 80
            break;
    
        default:
            prixParNuit = 0;
            break;
    }

    if (option1Cochee.checked) {
        total += 100;
    }
    if (option2Cochee.checked) {
        total += 100;
    }
    if (nombresAdultes) {
        total += nombresAdultes.value*70;
    }
    if (nombresEnfants) {
        total += nombresEnfants.value*40;
    }
    if (nombreDeNuits) {
        total += nombreDeNuits*prixParNuit;
    }

    resultat.innerText = "Total à payer : " + total + "€";
}
calculerTotal();

option1Cochee.addEventListener("click",calculerTotal);
option2Cochee.addEventListener("click",calculerTotal);
nombresAdultes.addEventListener("keyup",calculerTotal);
nombresAdultes.addEventListener("click",calculerTotal);
nombresEnfants.addEventListener("keyup",calculerTotal);
nombresEnfants.addEventListener("click",calculerTotal);
personnages.addEventListener("change",calculerTotal);

