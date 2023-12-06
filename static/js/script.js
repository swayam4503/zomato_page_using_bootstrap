function login() {
    // Perform authentication logic here (dummy logic for illustration)
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "user" && password === "password") {
        // If authentication is successful, show cart and orders links
        document.getElementById("cartLink").classList.remove("hidden");
        document.getElementById("ordersLink").classList.remove("hidden");
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function goToCart() {
    // Add logic to navigate to the cart page
    alert("Navigating to the cart page...");
}

function goToOrders() {
    // Add logic to navigate to the orders page
    alert("Viewing orders...");
}
