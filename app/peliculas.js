
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
 };

function tarjtaShow(titulo, poster, categoria, resenia, anio, puntaje, id ){

    let tarjetaV =document.createElement('div');
    let tituloV =document.createElement('h4');    
    let imgV =document.createElement('img');
    let categoriaV =document.createElement('p');    
    let reseniaV=document.createElement('p');
    let anioV= document.createElement('p')
    let puntajeV =document.createElement('p');
    
    //tarjeta
    tarjetaV.className="tarjeta";
    tarjetaV.className="col-3";
    tarjetaV.id="tarjeta"+id;
    
    tituloV.innerHTML=titulo;
    imgV.src=poster;
    categoriaV.innerHTML=categoria;
    reseniaV.innerHTML=resenia;
    anioV.innerHTML=anio;
    puntajeV.innerHTML=puntaje;

    tituloV.append(tarjetaV);
    imgV.append(tarjetaV);
    categoriaV.append(tarjetaV);
    reseniaV.append(tarjetaV);
    anioV.append(tarjetaV);
    puntajeV.append(tarjetaV);

    //insertar en grilla
    tarjetaV.append('grid');
};

function NuevaTarjeta (){  
    let titulo =document.getElementById('titulo').value;
    let poster =document.getElementById('poster').value;
    let categoria =document.getElementById('categoria').value;
    let anio =document.getElementById('anio').value;

    let card = new tarjeta (titulo, poster, categoria, anio);

    localStorage.setItem('peliculas', JSON.parse(tarjeta));

    tarjtaShow(titulo, poster, 'Accion', 'linda', anio, 7, 100);
}


