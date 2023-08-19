let user = document.getElementById("user")
let pass = document.getElementById("password")
let form = document.getElementById("form")
let parrafo = document.getElementById("warning")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning = ""
    let entrar = false;
    parrafo.innerHTML = ""
    if (user.value == "Cristh715@gmail.com" && pass.value == "cristh715"){
        window.alert("Bienvenido xd");
    }else{
        warning += "Usuario no válido <br>"
        entrar = true;
    }

    if (entrar){
        parrafo.innerHTML = warning;
    }

})

