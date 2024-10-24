document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the normal way
    
    // Fetch form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Perform simple validation (you can add more)
    if (name === '' || email === '' || message === '') {
        document.getElementById('form-message').innerText = "All fields are required.";
        document.getElementById('form-message').style.color = 'red';
        return;
    }
    
    // Simulate successful submission
    document.getElementById('form-message').innerText = "Your message has been sent successfully!";
    document.getElementById('form-message').style.color = 'green';
    
    // Reset form fields
    document.getElementById('enquiryForm').reset();
});
