function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let img = document.getElementById('gif')
    if(num.value.length == 0) {
        alert('Por favor, digite um número!')
    }else {        
        img.style.display = 'none'
        var n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            
        }
    }

}