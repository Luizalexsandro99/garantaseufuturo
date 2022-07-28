let nomeFinal = ''
let emailFinal = ''
let celularFinal = ''


function values() {
    enviar.addEventListener('click', () => {
        if (nome.value !== '' && email.value !== '' && email.value.includes('@') && celular.value !== '' && celular.value.length == 11) {
                emailFinal = email.value
                celularFinal = celular.value
                nomeFinal = nome.value
        }
    })
}
values()
