const Cuentas = [];
const cuentas = [];
const apiKey= '74a3a56f8ad0a7567bd3d73843e6bfbd';
hideSuccess();
hideAlerta();
hideSuccess1();
hideAlerta1();


console.log(Cuentas);
class Cuenta {
  constructor(nombre, clave, correo, avatar, admin) {
    this.nombre = nombre;
    this.clave = clave;
    this.correo = correo;
    this.avatar = avatar;
    this.admin = admin;
  }
}

class tarjeta {
   constructor (id, nombre, resenia, poster, categoria, anio, puntaje){
      this.id=id;
      this.nombre=nombre;
      this.resenia=resenia;
      this.poster=poster;
      this.categoria=categoria;
      this.anio=anio;
      this.puntaje= puntaje;
   }
}

function NuevaCard (){
  
    let card = new tarjeta;

}
/*
if(localStorage.getItem("usuario")){
    let admin = new Cuenta(0,"admin","admin",true);
    Cuentas.push(admin);
    let use = new Cuenta(0,"asd","1234",false);
    Cuentas.push(use);
    window.localStorage.setItem("usuario",JSON.stringify(cuentas))
    localStorage.setItem("Cuentas", JSON.stringify(Cuentas));
    console.log(Cuentas);
}*/
//inicio paliza
function login(){
    let usuario = document.getElementById("usuario");
    let contrasenia = document.getElementById("contrasenia");
    console.log(cuentas.find(element => element.nombre == usuario.value && element.clave == contrasenia.value));

    usuario.value = "";
    contrasenia.value = "";
}
function mostrarAlerta1(texto){
    let alerta = document.getElementById("alerta1");
    alerta.setAttribute("class","alert alert-danger text-center");
    alerta.innerHTML = texto;
}
function hideAlerta1(){
    let alerta = document.getElementById("alerta1");
    alerta.setAttribute("class","alert visually-hidden alert-danger");
}
function mostrarSuccess1(texto){
    let alerta = document.getElementById("exito1");
    alerta.setAttribute("class","alert alert-success text-center");
    alerta.innerHTML = texto;
}
function hideSuccess1(){
    let alerta = document.getElementById("exito1");
    alerta.setAttribute("class","alert visually-hidden alert-success");
    console.log(alerta);

}
function mostrarAlerta(texto){
  let alerta = document.getElementById("alerta");
  alerta.setAttribute("class","alert alert-danger text-center");
  alerta.innerHTML = texto;
}
function hideAlerta(){
  let alerta = document.getElementById("alerta");
  alerta.setAttribute("class","alert visually-hidden alert-danger");
}
function mostrarSuccess(texto){
  let alerta = document.getElementById("exito");
  alerta.setAttribute("class","alert alert-success text-center");
  alerta.innerHTML = texto;
}
function hideSuccess(){
  let alerta = document.getElementById("exito");
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
        
  }

  //  localStorage.setItem("llave","valor");
    //    cuentas = localStorage.getItem('Cuenta');


  //  window.localStorage.getItem(nombre) recuperar
    
//    localStorage.setItem("") //crear
//Fin Paliza

function NuevoUsuario() {
  hideAlerta1();
  hideSuccess1();
  let usuario = document.getElementById("usuario1");
  let clave = document.getElementById("contrasenia1");
  let avatar = document.getElementById("avatar");
  let correo = document.getElementById("correo");

  let nuevo = new Cuenta(usuario.value, clave.value, correo.value, avatar.value);

  if (Cuentas.find(item=> item.nombre==usuario.value)){
    mostrarAlerta1("El nombre de usuario ya existe");
    //alert('El nombre de usuario ya existe');
  }else if (clave.value.length>3){

  Cuentas.push(nuevo);
  localStorage.setItem("Cuentas", JSON.stringify(Cuentas));
  mostrarSuccess1("Agregado")
  //alert("Agregado");
  }
  else{
    mostrarAlerta1("Clave demasiado corta");
  }
  usuario.value ="";
  clave.value ="";
  correo.value="";
  avatar.value="";

}

function LogIn() {
  hideSuccess();
  hideAlerta();

   let usuarios=JSON.parse(localStorage.getItem("Cuentas"));

    let usuario = document.getElementById("usuario");
    let pass = document.getElementById("contrasenia");

    if (Cuentas.find(item=> item.nombre == usuario.value && item.clave ==pass.value)){
     //alert('Bienvenido');
     mostrarSuccess("Bienvenido");
     
     let favoritos = document.getElementById("btnfavoritos text-light");
     favoritos.setAttribute("class", "nav-link active text-light");
     
   }else{
    mostrarAlerta("Nombre de usuario o contraseña no validos");
    //alert('Nombre de usuario o contraeña no validos');
   }
   usuario.value= "";
   pass.value="";
};

function EliminarUsuario(orden){

    listadeusuarios.splice(inx, 1);
    localStorage.setItem("usuarios", JSON.stringify(listadeusuarios));
    console.log("usuario:" + usuario + " eliminado");
};




