var userLogin = false
setTimeout(() => {
    if (userLogin) {
        location.replace("./screens/Home/index.html")
    }
    else{
        location.replace("./screens/login/index.html")
    }
}, 3000);//3 seconds
