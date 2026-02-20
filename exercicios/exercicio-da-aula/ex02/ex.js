function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    
    if(fano.value.length == 0 || fano.value > ano ) { // se nao foi digitado um ano ou se for maior que o ano
                                                    //atual
    window.alert('[ERRO] Verifique os dados e tente novamente.')
    }
    else {
        var fsex = document.getElementsByName('radisex')
        var idade = ano - Number(fano.value) 
        var genero = ' '
        var img = document.createElement('img') // cria uma tag img
        img.setAttribute('id' , 'foto') // atribui um id 'foto' para a img
        if(fsex[0].checked) {  // se o que tiver marcado for o 0
            genero = 'Homem'
            if(idade >= 0 && idade < 10)
                img.setAttribute('src', 'bebeM.jpg')
            else if(idade < 21)
                img.setAttribute('src', 'jovemM.jpg')
            else if(idade < 50)
                img.setAttribute('src', 'homem.jpg')
            else 
                img.setAttribute('src', 'idoso.jpg')
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10)
                img.setAttribute('src', 'bebeF.jpg')
            else if(idade < 21)
                img.setAttribute('src', 'jovemF.jpg')
            else if(idade < 50)
                img.setAttribute('src', 'idosa.jpg')
            else 
                img.setAttribute('src', 'mulher.jpg')
        }
      
    res.style.textAlign = 'center' // para alinhar o res pelo JavaScript
    res.innerHTML = `Um(a) ${genero} com ${idade} anos`
    res.appendChild(img) //adiciona o elemento img 
    }

}