const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("submit-button");
const contactForm = document.getElementById("contact-form");

submitButton.addEventListener("click", (event) => {
    const name = nameInput.value;
    const email = emailInput.value;
    const subject = subjectInput.value;
    const message = messageInput.value;


    if (!name || !email || !subject || !message) {
        alert("Please fill out all fields.");
    } else {
        alert("Form Submitted Successfully!");
        contactForm.reset();
    }

    
});