window.onload = () => {
    let form = document.querySelector('#form')

    form.addEventListener('submit', function(e) {
        let input_email = document.querySelector('#email')
        let password = document. querySelector('#password')

        if (input_email.value.length < 3 || input_email.value.length > 80) {
            e.preventDefault()
            alert('El email tiene que tener entre 3 y 80 caracteres')
        }
        if (password.value.length < 3 || password.value.length > 80) {
            e.preventDefault()
            alert('La contraseña tiene que tener entre 3 y 80 caracteres')
        }

    })
}