const peliculas = [];
const series = [];

//titulo, poster, categoria, reseña, año, puntaje
class tarjeta {
  constructor(titulo, poster, categoria, resenia, anio, puntaje) {
    this.titulo = titulo;
    this.poster = poster;
    this.categoria = categoria;
    this.resenia = resenia;
    this.anio = anio;
    this.puntaje = puntaje;
  }
}

function tarjtaShow(titulo, poster, categoria, resenia, anio, puntaje) {

  let tarjetaV = document.createElement("div");
  let cuerpoV = document.createElement("div");
  let tituloV = document.createElement("h5");
  let imgV = document.createElement("img");
  let categoriaV = document.createElement("p");
  let reseniaV = document.createElement("p");
  let anioV = document.createElement("small");
  let puntajeV = document.createElement("p");
  let separador= document.createElement('br');
  let btneliminar =document.createElement("button");
  let btnfav =document.createElement("button");

  //tarjeta
  tarjetaV.className = "card col-3";
  tarjetaV.style="width: 18rem;";
  tituloV.className = "card-title";
  cuerpoV.className = "card-body";
  reseniaV.className = "card-text";
  imgV.className="card-img-top";
  puntajeV.className="puntaje";

  tarjetaV.id=titulo;
  tituloV.innerText = titulo;
  imgV.src = poster;
  categoriaV=categoria;
  reseniaV.innerText = 'Reseña:'+resenia;
  anioV.innerText = 'Año:'+anio;
  puntajeV.innerText = puntaje;
  
  
  btneliminar.innerHTML="Eliminar";
  btnfav.innerHTML="♡";

  btneliminar.className="btn btn-dark botones";
  btneliminar.onclick = function () {eliminarTarjeta(categoria, titulo)};
  btnfav.className="btn btn-dark botones";
  btnfav.onclick=function() {favoritos()};
  
  tarjetaV.append(tituloV);
  tarjetaV.append(imgV);
  cuerpoV.append(puntajeV);  
  tarjetaV.append(cuerpoV);
  cuerpoV.append(reseniaV);  
  cuerpoV.append(anioV);
  cuerpoV.append(separador);
  cuerpoV.append(btneliminar);
  cuerpoV.append(btnfav); 


    //insertar en grilla
    if (categoria=='Pelicula') {
    
      document.getElementById("pelisgrid").append(tarjetaV);   
    }else {
      document.getElementById("seriesgrid").append(tarjetaV);         
    } 

}

function NuevaTarjeta() {
  //titulo, poster, categoria, reseña, año, puntaje

  let titulo = document.getElementById("titulo").value;
  let poster = document.getElementById("poster").value;
  let categoria = document.getElementById("categoria").value;
  let resenia = document.getElementById("resenia").value;
  let anio = document.getElementById("anio").value;
  let puntaje = document.getElementById("puntaje").value;

  let card = new tarjeta(titulo, poster, categoria, resenia, anio, puntaje);

  if (categoria=='Pelicula') {
  peliculas.push(card);
  window.localStorage.setItem("peliculas", JSON.stringify(peliculas));
}else {
  series.push(card);
  window.localStorage.setItem("series", JSON.stringify(series));
} 

  tarjtaShow(titulo, poster, categoria, resenia, anio, puntaje);
};

function eliminarTarjeta(categoria, titulo){
  console.log(categoria, titulo);
   if (categoria=='Pelicula') {
    let item = peliculas.findIndex(titulo => titulo === titulo); 
    peliculas.splice(item, 1);
    document.getElementById(titulo).remove();
    window.localStorage.setItem("peliculas", JSON.stringify(peliculas));
   }else {
    let item = series.findIndex(titulo => titulo === titulo); 
    series.splice(item, 1);
    document.getElementById(titulo).remove();
    window.localStorage.setItem("series", JSON.stringify(series));
    alert('Serie eliminada');
  } ;
};

function favoritos (){
  alert("Funcion no implementada :(");

}


