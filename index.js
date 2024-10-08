// enter your code here
// index.js

// Function to submit user data
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Append the new id to the DOM
        const idElement = document.createElement('p');
        idElement.textContent = `New user created with ID: ${data.id}`;
        document.body.appendChild(idElement);
    })
    .catch(error => {
        // Handle and append error message to the DOM
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
    });
}

// Example usage (you can test this in the console):
// submitData('John Doe', 'john@example.com');
