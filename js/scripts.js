document.addEventListener('DOMContentLoaded', function() {
    // Inicialização de AOS
    AOS.init();

    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const action = form.action;
        
        try {
            const response = await fetch(action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.reset();
                alert('Mensagem enviada com sucesso!');
            } else {
                alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
            }
        } catch (error) {
            alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
        }
    });
});
