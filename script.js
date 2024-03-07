// Function to handle form submission for searching PDF
document.querySelector('#search-pdf form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the search query from the input field
    const searchQuery = document.querySelector('#google-scholar').value.trim();

    // Perform search operation (e.g., redirect to Google Scholar with the search query)
    // You can customize this part based on your requirements
    console.log('Searching for: ', searchQuery);
});

// Function to handle form submission for uploading PDF
document.querySelector('#upload-pdf form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the uploaded file from the input field
    const file = document.querySelector('#file-upload').files[0];

    // Perform file upload operation (e.g., send file to server for processing)
    // You can customize this part based on your requirements
    console.log('Uploading file: ', file.name);
});

// Function to handle form submission for submitting assignment for proofreading
document.querySelector('#submit-assignment form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get assignment details from the input fields
    const assignmentName = document.querySelector('#assignment-name').value.trim();
    const assignmentDescription = document.querySelector('#assignment-description').value.trim();

    // Perform submission operation (e.g., send assignment details to specified email for proofreading)
    // You can customize this part based on your requirements
    console.log('Submitting assignment: ', assignmentName, assignmentDescription);
});

// Function to handle form submission for submitting comments or questions
document.querySelector('.comment-box form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get comment details from the input fields
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const comment = document.querySelector('#comment').value.trim();

    // Perform submission operation (e.g., send comment details to server for processing)
    // You can customize this part based on your requirements
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Comment: ', comment);
});
