function loguin() {
    let usuario = document.getElementById("usuario").value;
    
    let contraseña = document.getElementById("contraseña").value;            
        

   if
    (usuario === "Juliana" && contraseña === "123456")
        {
            window.location.href = "Main.html";}

     else if
        (usuario === "Santiago" && contraseña === "123456"){
        window.location.href = "Main.html";
        }

    else if
        (usuario === "Monroy" && contraseña === "123456"){
        window.location.href = "Main.html";
        }
           
    else if (usuario === "Jose" && contraseña === "123456")
        {
            window.location.href = "Main.html";}    
    else {
            alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
        }

}