// Initialize EmailJS
(function() {
    emailjs.init("uOBJIAnnjpWNTVMfu"); // Replace with your EmailJS User ID
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send the form data using EmailJS
    emailjs.sendForm('service_fr4zcwe', 'template_4by7u94', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send the message. Please try again later.');
            console.error('EmailJS error:', error);
        });
});
