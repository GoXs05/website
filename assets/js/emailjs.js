function sendMail() {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");
    const errorMessage = document.getElementById("error-message");
    const sendButton = document.querySelector('input[type="submit"]');

    // Clear any previous error message
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    // Validate that all fields are filled
    if (!nameField.value.trim() || !emailField.value.trim() || !messageField.value.trim()) {
        errorMessage.textContent = 'Please fill out all fields before sending the message.';
        errorMessage.style.display = 'block';
        return; // Exit the function if any field is empty
    }

    let params = {
        name: nameField.value,
        email: emailField.value,
        message: messageField.value
    };

    // Disable the button to prevent multiple submissions
    sendButton.disabled = true;
    sendButton.value = 'Sending...';

    emailjs.send("service_fr4zcwe", "template_4by7u94", params)
        .then(function() {
            // Change the button text to "Sent ✔"
            sendButton.value = 'Sent ✔';
            sendButton.classList.add('sent-button'); // Optional: Add a class to style the button if needed
        })
        .catch(function(error) {
            // If there's an error, show a message and re-enable the button
            errorMessage.textContent = 'Failed to send the message. Please try again.';
            errorMessage.style.display = 'block';
            sendButton.disabled = false;
            sendButton.value = 'Send Message';
        });
}
