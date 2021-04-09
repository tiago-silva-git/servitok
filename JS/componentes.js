/*Botão de copiar do modal*/
/*TikTok*/
function tiktok() {
    var n = document.getElementById("codtxt");
    n.select();
    n.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.getElementById("codtxt").disabled = true;
    var copiado = document.getElementById("btncopiar");
    copiado.innerHTML = `Copiado`
}
