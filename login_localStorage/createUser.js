document.getElementById("create").addEventListener("click", (e)=>{
    e.preventDefault();
    
    // Get the username and password input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username and password are not empty
    if (username !== "" && password !== "") {
        // Check if the user already exists
        if (localStorage.getItem(username) !== null) {
            alert("El usuario ya existe.");
        } else {
            // Store the username and password in local storage
        localStorage.setItem(username, password);
        alert("Usuario creado.");
        document.location.href = "index.html";
        }
    } else {
        alert("Ingresa un nombre de usuario y contraseña.");
    }
});