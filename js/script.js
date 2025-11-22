// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    
    // --- Requirement #4: Greeting ---
    // Prompt the user for their name
    let userName = prompt("Please enter your name:", "Guest");
    
    // If user cancels or leaves empty, default to Guest
    if (!userName) {
        userName = "Guest";
    }
    
    // Update the HTML element
    document.getElementById("user-name").innerText = userName;


    // --- Requirement #5: Form Validation & Display ---
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        // 1. Prevent the page from reloading (default form behavior)
        event.preventDefault();

        // 2. Get values from inputs
        const name = document.getElementById("name-input").value;
        const email = document.getElementById("email-input").value;
        const phone = document.getElementById("phone-input").value;
        const message = document.getElementById("message-input").value;

        // 3. Validation (Check if empty)
        if (name === "" || email === "" || phone === "" || message === "") {
            alert("Please fill out all fields!");
            return; // Stop the function here
        }

        // 4. Display values in the result box
        document.getElementById("sender-name").innerText = name;
        document.getElementById("sender-message").innerText = message;
        
        // Add current time for extra credit/professional touch
        document.getElementById("current-time").innerText = new Date().toString();
        
        // Optional: Clear form after success
        // form.reset(); 
    });
});