const form = document.getElementById('contactForm');
const inputName = document.getElementById('inputFormName');
const inputCel = document.getElementById('inputFormCel');
const inputMail = document.getElementById('inputFormMail');
const inputMessage = document.getElementById('inputFormMessage');
const formStatusMessage = document.getElementById('formStatusMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (validateForm()) {
        fetch("https://formsubmit.co/ajax/ecs.elchicodesistemas@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'Nombre': inputName.value,
                'Teléfono': inputCel.value,
                'Correo electrónico': inputMail.value,
                'Mensaje': inputMessage.value
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                formStatusMessage.innerHTML = `<span><i class="bi bi-check-lg me-3"></i>El mensaje se envió correctamente</span>`
                formStatusMessage.classList.remove('opacity-0')
                setTimeout(() => { formStatusMessage.classList.add('opacity-0') }, 3000)
                clearForm();
            })
            .catch(error => console.log(error));
    } else {
        console.log('error');
    }

})

const validateForm = () => {
    const regexPhone = /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;
    const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    let formValidation = true;

    formStatusMessage.innerHTML = '';

    if (inputName.value.length < 4) {
        formValidation = false;
        inputName.classList.add('contactHero__inputError')
        formStatusMessage.innerHTML += `<span><i class="bi bi-exclamation-lg me-3"></i>Ingrese un nombre mayor a 3 caracteres</span>`
    } else {
        inputName.classList.remove('contactHero__inputError')
    }

    if (!regexPhone.test(inputCel.value)) {
        formValidation = false;
        inputCel.classList.add('contactHero__inputError')
        formStatusMessage.innerHTML += `<span><i class="bi bi-exclamation-lg me-3"></i>Ingrese un teléfono válido</span>`
    } else {
        inputCel.classList.remove('contactHero__inputError')
    }

    if (!regexMail.test(inputMail.value)) {
        formValidation = false;
        inputMail.classList.add('contactHero__inputError')
        formStatusMessage.innerHTML += `<span><i class="bi bi-exclamation-lg me-3"></i>Ingrese un correo válido</span>`
    } else {
        inputMail.classList.remove('contactHero__inputError')
    }

    if (inputMessage.value.length < 11) {
        formValidation = false;
        inputMessage.classList.add('contactHero__inputError')
        formStatusMessage.innerHTML += `<span><i class="bi bi-exclamation-lg me-3"></i>Ingrese un mensaje mayor a 10 caracteres</span>`
    } else {
        inputMessage.classList.remove('contactHero__inputError')
    }

    if (!formValidation) {
        formStatusMessage.classList.remove('opacity-0')
    }

    return formValidation;
}

const clearForm = () => {
    inputName.value = '';
    inputCel.value = '';
    inputMail.value = '';
    inputMessage.value = '';

    inputName.classList.remove('contactHero__inputError')
    inputCel.classList.remove('contactHero__inputError')
    inputMail.classList.remove('contactHero__inputError')
    inputMessage.classList.remove('contactHero__inputError')
}