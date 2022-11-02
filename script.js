//do while
function tabuada (){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('[Erro] Insira um valor para continuar!')
    } else {
        let n = Number(num.value)
        let c = 1
       tab.innerHTML = ''

        do{
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        } while (c <= 10)
    }

}
 function limpar () {
    let tab = document.getElementById('seltab')
    tab.innerHTML = ''
 }

/*
FOR
function tabuada () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        window.alert('[Erro] Insira um valor para continuar!')
    }else {
        let n = Number(num.value)
        tab.innerHTML = ''

        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
        }
    }
}
*/


