const Cuentas = [];

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
  }else if (clave.value.length>3){

  Cuentas.push(nuevo);
  localStorage.setItem("Cuentas", JSON.stringify(Cuentas));
  mostrarSuccess1("Agregado")
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

    if (usuarios.find(item=> item.nombre == usuario.value && item.clave ==pass.value)){
     mostrarSuccess("Bienvenido");
     let favoritos = document.getElementById("btnfavoritos text-light");
     favoritos.setAttribute("class", "nav-link active text-dark");
     let configuracion = document.getElementById("configuracion");
     let avatar = document.getElementById("avatar");
     configuracion.className= "nav-link active";
     avatar.className= "";
   }else{
    mostrarAlerta("Nombre de usuario o contraseña no validos");
   }
   usuario.value= "";
   pass.value="";
};

function EliminarUsuario(orden){
    listadeusuarios.splice(orden, 1);
    localStorage.setItem("usuarios", JSON.stringify(listadeusuarios));
    console.log("usuario:" + usuario + " eliminado");
};




