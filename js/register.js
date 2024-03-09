const registrationForm = document.getElementById("registrationForm");

// sends POST request to localhost:3000 where index.js express server is running
// request contains the registration information from register.html
registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(registrationForm);
    const data = Object.fromEntries(formData);

    fetch("http://localhost:3000/saveFormData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.text()) // Parse response as text
        .then((data) => console.log(data)) // Log the text response
        .catch((error) => console.log(error));

    // Redirect user to userpage after registering
    window.location.href = "../html/userpage.html";
});
