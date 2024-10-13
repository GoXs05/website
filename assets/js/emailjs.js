function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const sendButton = document.querySelector('input[type="submit"]');
    
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
            // If there's an error, alert the user and re-enable the button
            alert('Failed to send the message. Please try again.');
            sendButton.disabled = false;
            sendButton.value = 'Send Message';
        });
}
