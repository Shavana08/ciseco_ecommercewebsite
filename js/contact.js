document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const submitButton = document.getElementById('contact-submit');
    const toast = document.getElementById('toast');
    const toastMessageText = document.getElementById('toast-message-text');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        
        const formData = { name, email, message };
        localStorage.setItem('contactFormData', JSON.stringify(formData));

      
        toastMessageText.textContent = 'Your message has been sent. We will get back to you as soon as possible.';
        toast.classList.add('show');

        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);

       
        contactForm.reset();
    });
});
