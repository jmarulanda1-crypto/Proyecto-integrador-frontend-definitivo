function login() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    const usuariosPermitidos = {
        "Juliana": "123456",
        "Monroy": "123456",
        "Santiago": "123456",
        "Jose": "123456"
    };

    if (usuariosPermitidos[usuario] && usuariosPermitidos[usuario] === contraseña) {
        window.location.href = "Main.html";
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
}