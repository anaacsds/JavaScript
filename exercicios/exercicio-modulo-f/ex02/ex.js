function calcular() {
    var n = window.document.getElementById('txt1')
    var tab = window.document.getElementById('selTab')

    if(n.value.length == 0 )
        window.alert('Digite um número válido!')

    else{
        let num = Number(n.value)
        let c = 0

        while(c <= 10) {
            let item = document.createElement('option')
            item.text = (`${num} * ${c} = ${num*c}`) 
            tab.appendChild(item)
            c++
        }
    }
}