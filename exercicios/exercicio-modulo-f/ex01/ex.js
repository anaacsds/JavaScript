let lista = document.getElementById('flista')
var n = document.getElementById('txt1')
let res = document.getElementById('res')
let valores = [] 

function isNumero(n) { // Verifica se o valor está entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100)
        return true
    else
        return false
}

function inLista(n, l) { // verifica se o número já está no array
    if(l.indexOf(Number(n)) != -1) // O indexOf procura o número dentro do array l. 
                                    // Se retornar -1, significa que não encontrou
        return true
    else
        return false
}

function adicionou() {

    if(!inLista(n.value, valores) && isNumero(n.value)) { // se o número NÃO estiver na lista e for um número válido, adiciona
        valores.push(Number(n.value)) //n.value pega o texto digitado no campo de input
                                     //number(n.value) converte essa string para número 
                                    //valores.push adiciona esse número ao final do array valores
        let item = document.createElement('option') // cria um novo elemento option (item de lista suspensa) e guarda na variável item
        item.text = `Valor ${n.value} adicionado`
        lista.appendChild(item) // appendChild significa "adiciona como filho"
                                // Cada número adicionado vira uma nova opção na lista suspensa
        res.innerHTML = ` ` // caso algum outro numero for colocado apos ter finalizado, aqui ele apaga
        //o resultado de finalizou, para poder ser calculado novamente
    }
    else {
         window.alert('[ERRO] Adicione um valor válido!')
    }

    n.value = ` ` // limpa o que estava escrito na caixa de 
    n.focus() // texto para ser possivel escrever outro numero sem ter que apagar antes
}

function finalizou() {
    if(valores.lenght == 0) 
        window.alert('Adiciona valores antes de finalizar!')
    else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores ){ //para cada posição pos em valores
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores [pos]
            if(valores[pos] < menor)
                menor = valores [pos]
        }

        media = soma/tot

        res.innerHTML = ` `
        res.innerHTML += `<p> Ao todo temos ${tot} elementos. </p>`
        res.innerHTML += `<p> O maior valor encontrado foi: ${maior} . </p>`
        res.innerHTML += `<p> O menor valor encontrado foi: ${menor} . </p>`
        res.innerHTML += `<p> Somando todos os valores, temos: ${soma} . </p>`
        res.innerHTML += `<p> A média dos valores é ${media} . </p>`

    }
}