//Identify DOM element
let composeButton = document.getElementById('contact-me-button');// Function to handle the button click


function composeEmail() {
    // Define the email address, subject, and body
    let emailAddress = 'alex.wilson.0425@gmail.com';
    let subject = 'Security Vulnerability/Bug Report!';
    let body = '';

    // Create a mailto link with the email address, subject, and body
    let mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
}

//Add event listener to previously selected DOM element 
composeButton.addEventListener('click', composeEmail);