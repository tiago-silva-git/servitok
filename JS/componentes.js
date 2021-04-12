/*Botão de copiar do modal*/
/*TikTok*/
function copiar() {
    var n = document.getElementById("codtxt");
    n.select();
    n.setSelectionRange(0, 99999)
    document.execCommand("copy");
    var copiado = document.getElementById("btncopiar");
    copiado.innerHTML = `Copiado`
    copiado.style.color = '#32CD32';
    document.getElementById("codtxt").disabled = true;
}

function copiar2() {
    var n = document.getElementById("codtxt2");
    n.select();
    n.setSelectionRange(0, 99999)
    document.execCommand("copy");
    var copiado = document.getElementById("btncopiar2");
    copiado.innerHTML = `Copiado`
    copiado.style.color = '#32CD32';
    document.getElementById("codtxt2").disabled = true;
}

function copiar3() {
    var n = document.getElementById("codtxt3");
    n.select();
    n.setSelectionRange(0, 99999)
    document.execCommand("copy");
    var copiado = document.getElementById("btncopiar3");
    copiado.innerHTML = `Copiado`
    copiado.style.color = '#32CD32';
    document.getElementById("codtxt3").disabled = true;
}
