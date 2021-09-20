const cuentas = [];
class Cuenta {
  constructor(nombre, clave, correo, avatar, admin) {
    this.nombre = nombre;
    this.clave = clave;
    this.correo = correo;
    this.avatar = avatar;
    this.admin = admin;
  }
}

function leerUsuarios() {
  if (localStorage.getItem("Cuentas")) {
    cuentas = JSON.parse(localStorage.getItem("Cuentas"));
  }
}

function NuevoUsuario() {
  let usuario = document.getElementById("usuario1").value;
  let clave = document.getElementById("contrasenia1").value;
  let avatar = document.getElementById("avatar").value;
  let correo = document.getElementById("correo").value;

  let nuevo = new Cuenta(usuario, clave, avatar, correo);

  leerUsuarios();

  cuentas.forEach(function Buscar(e) {
    if (cuentas.nombre == usuario) {
      alert("el usuario ya existe");
      return;
    }
  });
  cuentas.push(nuevo);
  localStorage.setItem("cuentas", JSON.stringify(nuevo));
  alert("Agregado");
  document.getElementById("CerrarRegistro").click();
}

function LogIn() {

    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("contrasenia").value;
    let entro = false;

  leerUsuarios();

  cuentas.forEach(function validar(e) {
    if (cuentas.nombre == usuario && cuentas.clave == clave) {
      entro = true;
    }
  });
  if ((entro = true)) {
    document.getElementById("btninicio").hidden;
    document.getElementById("btnRegistro").hidden = true;
    document.getElementById("btnFavoritos").hidden = false;
  } else {
    alert("Nombre de usuario o contraseña no validos");
  }
}

function EliminarUsuario(orden){

    listadeusuarios.splice(inx, 1);
    localStorage.setItem("usuarios", JSON.stringify(listadeusuarios));
    console.log("usuario:" + usuario + " eliminado");
    break;


};

