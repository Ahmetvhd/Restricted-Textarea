let metin = document.querySelector("#textarea");
let icerik = document.querySelector("#sayac");
let textarea = document.querySelector("textarea")
let sayacContainer = document.querySelector(".sayac-container")

function guncelle() {

    let metinDeger = metin.value.length;
    icerik.innerHTML = metinDeger;

    if (metinDeger >= 250) {
        metin.style.border = "2px solid red";
        metin.style.outline = "none";
        sayacContainer.style.color = "red"
        textarea.classList.add("uyari")
    } else {
        metin.style.border = "2px solid black";
        sayacContainer.style.color = "black"
        textarea.classList.remove("uyari")
    }
}