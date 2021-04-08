/*Botão de copiar do modal*/
/*TikTok*/
function copiar() {
    document.getElementById("execCopy").select();
    document.execCommand("copy");
    var copiado = document.getElementById("btncopiar")
    copiado.innerHTML = `Copiado`
}

/*Kwai*/
function copiar2() {
    document.getElementById("execCopy2").select();
    document.execCommand("copy");
    var copiado = document.getElementById("btncopiar2")
    copiado.innerHTML = `Copiado`
}