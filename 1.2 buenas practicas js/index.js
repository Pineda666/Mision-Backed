let parrafoInicial = document.getElementById("parrafoinicial");

parrafoInicial.onclick = function(){
    cambiarDeColorAleatorio();
}

function cambiarDeColorAleatorio(){

    const colores = [
        "red",
        "blue",
        "black",
        "cyan"
    ]

    parrafoInicial.style.color = colores[Math.floor(Math.random()*colores.length)]
}