function cantadaCerta() {
    document.getElementById("popupCerto").style.display = "flex";
}
function cantadaErrada() {
    document.getElementById("popupErrado").style.display = "flex";
}
function fecharPopup(id) {
    document.getElementById(id).style.display = "none";
}