function generartablero(){

    const tamano=8;
    const tablero=document.getElementById("tablero");
    for (let i=0; i<tamano; i++) {
        
        // creamos la fila
        let fila=document.createElement("div");
        fila.classList.add("fila")
        for (let j=0; j<tamano; j++) {
            
            // creamos cada elemento de la fila
            let div=document.createElement("div");
            div.classList.add("recuadro")
            fila.appendChild(div);
        }
        tablero.appendChild(fila);
    }
}