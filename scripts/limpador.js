function limpando(){
    enviar.addEventListener('click', ()=>{
        setTimeout(()=>{
            nome.value = ''
            email.value = ''
            celular.value = ''
        }, 2000)
    })
}

limpando()