/*Botão de copiar do modal*/
/*TikTok*/
function tiktok() {
    var n = document.getElementById("codtxt");
    n.select();
    n.setSelectionRange(0, 99999)
    document.execCommand("copy");
    var copiado = document.getElementById("btncopiar");
    copiado.innerHTML = `Copiado`
}


