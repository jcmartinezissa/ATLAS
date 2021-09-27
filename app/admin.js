imprimirTabla();
function imprimirTabla(){
    let cuentas = JSON.parse(localStorage.getItem("Cuentas"));
    let tabla = document.getElementById("tablaUsuarios")
    let fila = cuentas.length;
    let columna= 3;
    for(let i = 0 ; i<cuentas.length; i++){
        for(let j = 0 ; j<columna;j++){
            let nuevaFila = document.createElement("tr");
            let tnombre = document.createElement("td");
            let tclave = document.createElement("td");
            let tcorreo = document.createElement("td");
            let tavatar = document.createElement("td");
            let acciones = document.createElement("td")
    
    
    
            let eliminar = document.createElement("button");
            eliminar.setAttribute("class","btn btn-danger");
            eliminar.setAttribute("onclick",(`eliminar(${j})`));
    
            let botonSvg= document.createElement("i")
            botonSvg.setAttribute("class", "far fa-trash-alt") 
    
            tnombre.innerHTML = cuentas[j].nombre;
            tclave.innerHTML = cuentas[j].clave;
            tcorreo.innerHTML = cuentas[j].correo;
            tavatar.innerHTML = cuentas[j].avatar;
            acciones.innerHTML =  ""
            tabla.append(nuevaFila);
            nuevaFila.append(tnombre);
            nuevaFila.append(tclave);
            nuevaFila.append(tcorreo);
            nuevaFila.append(tavatar);
            nuevaFila.append(acciones);
            acciones.append(eliminar);
            eliminar.append(botonSvg);
        }
    }

}

function eliminar(orden){
    let array = JSON.parse(localStorage.getItem("Cuentas"));
    array.splice(orden,1);
    localStorage.setItem("Cuentas",JSON.stringify(array));
    location.reload();
}
