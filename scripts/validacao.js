const enviar = document.querySelector('#enviar')
let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let celular = document.querySelector('#celular')
const incorreto = document.querySelector('#alerta')
const correto = document.querySelector('#alerta2')



function validandoDados() {
    enviar.addEventListener('click', () => {
        if (nome.value !== '' && email.value !== '' && email.value.includes('@') && celular.value !== '' && celular.value.length == 11 ) {
            correto.style.display =' block '
            incorreto.style.display = 'none'
            enviar.style.display = ' none '
            setTimeout(() => {
                correto.style.display = ' none'
                enviar.style.display = ' block '
            }, 2000)
        } else {
            incorreto.style.display = ' block '
        }
    })
}
validandoDados()


    
