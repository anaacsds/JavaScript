function contar() {
    var i = window.document.getElementById('txt1')
    var f = window.document.getElementById('txt2')
    var p = document.getElementById('txt3')
    var res = window.document.getElementById('res')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) 
        /* i.value pega o texto digitado no campo
        i.value.length pega o tamanho (número de caracteres) desse texto */
        window.alert("Preencha todos os campos!")
    else {
        res.innerHTML = `Contando: `
        let ini = Number(i.value)
        /* precisa converter pra numero porque o .value sempre retorna uma 
        string (texto), mesmo que o usuário digite um número. */
        let fim = Number(f.value)
        let pas = Number(p.value)

    for(let c = ini; c <= fim; c = c + pas) {
        res.innerHTML += (`${c} `)
    }
}
}