window.onclick = function(){
    //me crea una serie de elements por cada tag encontrado
    let encabezados = document.createElement("h1");
    const text = document.createTextNode("¿quieres ser mi morrita?");

    encabezados.appendChild(text);
    document.body.appendChild(encabezados);
}

window.onclose = function(){
    let confirmation = false;
    if(!confirmation && true){
        const message = "Esperaaaaaa🤣";
    }
}