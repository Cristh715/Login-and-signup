let user = document.getElementById("user")
let pass = document.getElementById("password")
let form = document.getElementById("form")
let parrafo = document.getElementById("warning")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning = ""
    let entrar = false;
    parrafo.innerHTML = ""
    if (user.value == "admin" && pass.value == "admin"){
        window.location.href = 'inicio.html';
    }else{
        warning = 'Usuario no encontrado'
        entrar = true;
    }

    if (entrar){
        parrafo.innerHTML = warning;
    }

})

user.addEventListener("focus", () => {
    parrafo.innerHTML = "";
})

pass.addEventListener("focus", () => {
    parrafo.innerHTML = "";
})
