/*Botão de copiar do modal*/
/*TikTok*/
function tiktok() {
    document.getElementById("codtxt").disabled = true;
    var n = document.getElementById("codtxt");
    n.select();
    n.setSelectionRange(0, 99999)
    document.execCommand("copy");
    var copiado = document.getElementById("btncopiar");
    copiado.innerHTML = `Copiado`
}

