function sendMail() {
    let params = {
        name : document.getElementById("name").value,
        email: document.getElementById("email").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_fr4zcwe", "template_4by7u94", params).then(alert("Email Sent!"))
}