function login(){
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;

    if( user == "prueba" && password == "1234"){
        alert("Datos Correctos")
        //window.location = "index3.html";
    }else{
        alert("Datos Incorrectos")
        }
}