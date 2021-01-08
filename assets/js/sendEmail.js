function sendMail(contactForm) {
    emailjs.send("service_fsoseuo","staycation", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message_request": contactForm.message.value,
    })
    .then(
        function(response) {
            document.getElementById("fullname").value = "";
            document.getElementById("emailAddress").value = "";
            document.getElementById("message").value = "";
            document.getElementById("submit").style.backgroundColor = "EEEEEE";
            document.getElementById("successSubmission").style.display = "block";
            console.log("SUCCESS", response);
        },
        function(error) {
            alert("Oh no! Something went wrong with your request, please try again.");
            console.log("FAILED", error);
            }
        );
    return false;
}