function contar(){
    let ini = document.getElementById('txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    var res = document.getElementsByTagName('div')[1]
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){        
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO-400] Falta dados!')

    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando a contagem com 1')
            p = 1
        }
        res.innerHTML += `\u{1F3C1} `                
        let c = i
        if (i < f){
        while(c <= f){
            res.innerHTML += `${c} \u{1F680}	`
            c += p
        }
    } else {
        while(c >= f) {
        res.innerHTML += `${c} \u{1F680}	`
            c -= p
        }
    }
        res.innerHTML += `\u{1F4A5}`


    }
}