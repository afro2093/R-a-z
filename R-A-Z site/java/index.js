var tab = document.querySelectorAll(".room");
var fleche1 = document.querySelector(".img-flch-g");
var fleche2 = document.querySelector(".img-flch-d");
var slide = document.querySelector(".slide");
var indice_element_active = 1;
function augmenter(variable) {
    variable.style = "z-carousel:2;transform:scale(1.2)";
}
function diminuer(variable) {
    variable.style = "z-carousel:1;transform:scale(1);";
}
window.onload = () => {
    augmenter(tab[indice_element_active]);
}
fleche1.onclick = () => {
    if (indice_element_active != 1) {
        diminuer(tab[indice_element_active]);
        augmenter(tab[indice_element_active - 1]);
        slide.scrollBy(-210, 0);
        indice_element_active = indice_element_active - 1;
    }

}
fleche2.onclick = () => {
    if (indice_element_active != 9) {
        diminuer(tab[indice_element_active]);
        augmenter(tab[indice_element_active + 1]);
        slide.scrollBy(210, 0);
        indice_element_active = indice_element_active + 1;
    }

}