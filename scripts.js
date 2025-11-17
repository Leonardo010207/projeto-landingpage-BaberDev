// FORMULÁRIO DE CONTATO COM EMAILJS E TOASTIFY

emailjs.init({
    publicKey: "p9wehN3YoCT36SLZ7",
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    }

    const serviceId = 'service_vexsmd6'
    const templateId = 'template_jo2imtm'
    const submitButton = document.getElementById('submitButton');
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;

    emailjs.send(serviceId, templateId, formData)
        .then(() => {
            Toastify({
                text: "E-mail enviado com sucesso!",
                duration: 2000,
                style: {
                    background: '#28a745',
                    color: '#f4f4f4',
                    border: '3px solid #26923fff',
                }
            }).showToast();;

            document.getElementById('contact-form').reset();
        })
        .catch((error) => {
            Toastify({
                text: "Erro ao enviar o E-mail.",
                duration: 2000,
                style: {
                    background: '#dc3545',
                    color: '#f4f4f4',
                    border: '3px solid #b02a37ff',
                }
            }).showToast();;
            console.error('Erro ao enviar a mensagem:', error);
        })
        .finally(() => {
            submitButton.textContent = 'Enviar';
            submitButton.disabled = false;
        })
        

})

// FIM DO FORMULÁRIO DE CONTATO COM EMAILJS E TOASTIFY