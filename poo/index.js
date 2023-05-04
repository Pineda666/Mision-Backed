let nombres = {
    nombre: "Jesús",
    apellido: "Guzmán"
};

console.log(nombres.nombre);
console.log(nombres.hasOwnProperty("telefono"));

console.log(nombres);

function perro(nombre, edad){
    let perro = Object.create(Objetoconstructor);
    perro.nombre = nombre;
    perro.edad = edad;
    return perro;
}

let Objetoconstructor = {
    habla : function(){
        return "wof wof soy un perro";
    }
}

let firulais = perro("Firulais",9);
console.log(firulais.habla());