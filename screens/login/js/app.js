localStorage.setItem("email","faizanpervaiz517@gmail.com")
localStorage.setItem("password","pass123")
let email = localStorage.getItem("email")
let pass = localStorage.getItem("password")
function button() {
    let loginEmail = document.getElementById("email").value
    let loginPass = document.getElementById("pass").value
    if (!loginEmail) {
        alert("Enter-Email")
    }
    else if (!loginPass) {
        alert("Enter-Password")
    }
    else if (email == loginEmail && pass == loginPass) {
        location.replace("../Home/index.html")
    }
}