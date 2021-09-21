const cuentas= [];
class Cuenta {

    constructor(id,nombre,clave,admin){
        this.id = id;
        this.nombre = nombre;
        this.clave = clave;
        this.admin = admin;
    }
    
}
if(cuentas.length == 0){
    let admin = new Cuenta(0,"admin","admin",true);
    cuentas.push(admin);
    window.localStorage.setItem("usuario",JSON.stringify(cuentas))

}

function login(){
    let usuario = document.getElementById("usuario");
    let contrasenia = document.getElementById("contrasenia");
    console.log(cuentas.find(element => element.nombre == usuario.value && element.clave == contrasenia.value));

    usuario.value = "";
    contrasenia.value = "";
}
function mostrarAlerta1(error){
    let alerta = document.getElementById("alerta1");
    alerta.setAttribute("class","alert alert-danger");
    alerta.innerHTML = error;
}
function hideAlerta1(){
    let alerta = document.getElementById("alerta1");
    alerta.setAttribute("class","alert visually-hidden alert-danger");
}
function mostrarSuccess1(texto){
    let alerta = document.getElementById("success1");
    alerta.setAttribute("class","alert alert-success");
    alerta.innerHTML = texto;
}
function hideSuccess1(){
    let alerta = document.getElementById("success1");
    alerta.setAttribute("class","alert visually-hidden alert-success");
    console.log(alerta);

}
function Altas(id,nombre,clave,admin){
    hideAlerta1();
    hideSuccess1();
    //traer el array de usuarios 

    let usuario = document.getElementById("usuario1");
    let contrasenia = document.getElementById("contrasenia1");
    let successOk = true;
    texto = "¡Cuenta creada con éxito!";
    if (usuario.value != "" && contrasenia.value != ""){
        if(contrasenia.value.length>=4 && contrasenia.value.length <=10){
            let cuenta = new Cuenta(cuentas.length,usuario.value,contrasenia.value,false);
            cuentas.push(cuenta);
            window.localStorage.setItem("usuario",JSON.stringify(cuentas))
            console.table(cuentas);
            console.log(contrasenia.value);
            console.log(window.localStorage.getItem("usuario"));
            mostrarSuccess1(texto);
        }else{
            let error = "Contraseña muy corta"
            mostrarAlerta1(error);
        }


    }else{
        let error = "Usuario y/o contraseña incorrectos"
        mostrarAlerta1(error);
    }
    usuario.value = "";
    contrasenia.value = "";
        
    

  //  localStorage.setItem("llave","valor");
    //    cuentas = localStorage.getItem('Cuenta');


  //  window.localStorage.getItem(nombre) recuperar
    
//    localStorage.setItem("") //crear

}

