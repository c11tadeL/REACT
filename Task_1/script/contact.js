document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact__form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const categorySelect = document.getElementById('category');
    const messageInput = document.getElementById('message');
    const submitButton = document.querySelector('.contact__form-action button');
    
    function validateForm() {
        let isValid = true;
        
        document.querySelectorAll('.error-message').forEach(el => el.remove());
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
        
        if (nameInput.value.trim() == '') {
            showError(nameInput, 'Please enter your name');
            isValid = false;
        }
        
        if (emailInput.value.trim() == '') {
            showError(emailInput, 'Please enter your email');
            isValid = false;
        } 
        
        if (subjectInput.value.trim() == '') {
            showError(subjectInput, 'Please enter a subject');
            isValid = false;
        }
        
        if (categorySelect.value == '') {
            showError(categorySelect, 'Please select a category');
            isValid = false;
        }
        
        if (messageInput.value.trim() == '') {
            showError(messageInput, 'Please enter a message');
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            showError(messageInput, 'The message must be at least 10 characters long');
            isValid = false;
        }
        
        return isValid;
    }
    
    function showError(inputElement, errorMessage) {
        inputElement.classList.add('input-error');
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = errorMessage;
        inputElement.parentElement.appendChild(errorElement);
    }
    
    function animateButton() {
        submitButton.classList.add('btn-loading');
        submitButton.textContent = 'Sending...';
        
        setTimeout(() => {
            submitButton.classList.remove('btn-loading');
            submitButton.textContent = 'Sent!';
            submitButton.classList.add('btn-success');
            
            setTimeout(() => {
                submitButton.textContent = 'Send Message';
                submitButton.classList.remove('btn-success');
            }, 2000);
        }, 1500);
    }
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                subject: subjectInput.value.trim(),
                category: categorySelect.value,
                message: messageInput.value.trim()
            };
            
            console.log('Sending data:', formData);
            
            animateButton();
  
            setTimeout(() => {
                contactForm.reset();
            }, 1500);
        }
    });

    const inputs = [nameInput, emailInput, subjectInput, categorySelect, messageInput];
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const errorMessage = this.parentElement.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.remove();
                this.classList.remove('input-error');
            }
        });
    });
});
