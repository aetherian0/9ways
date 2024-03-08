// Clears localstorage from then usernames and refreshes the page
function clearStorage() {
    localStorage.clear();
    window.location.reload();
}


// Runs after loginform is submitted
function checkLogin(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch("../databases/accounts.json")
        .then((response) => response.json())
        .then((data) => {
            const user = data.find((user) => user.username === username);
            if (user) {
                if (user.password === password) {
                    localStorage.setItem("loggedInUser", username);
                    window.location.href = "../html/userpage.html";
                } else {
                    alert("Wrong password");
                }
            } else {
                alert("Username not found");
            }
        })
        .catch((error) => {
            console.error("Error fetching accounts.json:", error);
        });
}