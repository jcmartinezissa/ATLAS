const Cuentas = [];
const apiKey= '74a3a56f8ad0a7567bd3d73843e6bfbd';


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

function NuevoUsuario() {
  let usuario = document.getElementById("usuario1").value;
  let clave = document.getElementById("contrasenia1").value;
  let avatar = document.getElementById("avatar").value;
  let correo = document.getElementById("correo").value;

  let nuevo = new Cuenta(usuario, clave, correo, avatar);

  if (Cuentas.find(item=> item.nombre==usuario)){
    alert('El nombre de usuario ya existe');
  }else{

  Cuentas.push(nuevo);
  localStorage.setItem("Cuentas", JSON.stringify(nuevo));
  alert("Agregado");
  }
}

function LogIn() {
   let usuarios=JSON.parse(localStorage.getItem("Cuentas"));

    let usuario = document.getElementById("usuario").value;
    let pass = document.getElementById("contrasenia").value;

 
   if (Cuentas.find(item=> item.usuario == usuario && item.clave==pass)){
     alert('Bienvenido');
   }else{
    alert('Nombre de usuario o contraeña no validos');
   }
};

function EliminarUsuario(orden){

    listadeusuarios.splice(inx, 1);
    localStorage.setItem("usuarios", JSON.stringify(listadeusuarios));
    console.log("usuario:" + usuario + " eliminado");
};




