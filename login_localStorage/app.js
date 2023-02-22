const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const authInfo = localStorage.getItem(username);

  if(authInfo && authInfo == password){
    alert("Login correcto!");
  }
  else{
    alert ("Login incorrecto!");
  }
})
