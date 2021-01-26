function sendMail(contactForm) {
    /* Function set up with EmailJS */
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
            /* Changes colour of background on submit */ 
            document.getElementById("submit").style.backgroundColor = "EEEEEE";
            /* Submission message on block until submitted (In styles.css) */
            document.getElementById("successSubmission").style.display = "block";
            /* Shows successful in the console */
            console.log("SUCCESS", response);
        },
        function(error) {
            alert("Oh no! Something went wrong with your request, please try again.");
            /* Shows error in the console */
            console.log("FAILED", error);
            }
        );
    return false;
}