document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Getting elements and error values
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var messageError = document.getElementById('messageError');
    var successMessage = document.getElementById('successMessage');

    
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = '';

    // Name check (is it not empty)
    if (!nameInput.value.trim()) {
        nameError.textContent = 'Name is required';
        event.preventDefault();
    }

    // Email Check
    if (!emailInput.value.trim()) {
        emailError.textContent = 'Email is required';
        event.preventDefault();
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
        event.preventDefault();
    }

    // Validate message
    if (!messageInput.value.trim()) {
        messageError.textContent = 'Message is required';
        event.preventDefault();
    }
});

// Validate email address
function isValidEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}