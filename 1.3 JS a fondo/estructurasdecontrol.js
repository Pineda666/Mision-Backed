
//for
/*
for (let i = 0; i < 19; i++) {
    if ((i % 2) != 0) {
        continue;//te regresa al for
    }
    if (i == 10) {
        break;//sale del for, rompe elciclo
    }
    console.log(i);
}
console.log('aqui ya me salí');

var1 = null;
var3 = "";
var4 = 0;
var5 = false;
var6 = undefined;

console.log(var1 + var1);//nulo más nulo es cero? xd
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6 + var6);

var6 = 5;
console.log(var6);

// if - else if - else

console.log("__________________________________________")



function validarEdad(edad) {
    if (confirm("Estás seguro seguir con esto?")) {
        console.log("Sigue bajo tu propio riesgo");
        if (edad >= 18 && edad <= 150) {
            console.log("Puedes comprar cigarritos");
        } else if (edad > 150) {
            console.log("Ah caray! salúdame a Cepillin");
        } else if (edad >= 0) {
            console.log("Tas muy chiquito, vuelve en unos años");
        }else{
            console.log("Ah caray, tú no deberías existir");
        }
    } else {
        console.log("Qué miedoso.....xD")
    }
}

//switch
function mandarMensajes(edad){
    console.log(typeof edad);
    switch(edad){
    case 13:
        console.log("Deberías estar en la secundaria");
        break;
    case 17:
        console.log("Amo tu inocencia");
        break;
    default:
        console.log("No pues no sé qué decir.... holi");
}
}


let edad = prompt("Introduce tu edad");
if (edad && !isNaN(edad)) {//el isNaN(not a number) es: si no es un número devuelve true y si es un número devuelve false

    edad = Number(edad);

    validarEdad(edad);
    mandarMensajes(edad);
} else {
    alert("Debes introducir tu edad");
    location.reload();
}
*/

//while

let boletosDisponibles = 0;

while (boletosDisponibles > 0) {
    console.log("Boleto comprado para el corona capital");
     boletosDisponibles--;
     console.log("quedan: "+boletosDisponibles);
     console.log("___________________________________");
}

//do while
do{
    console.log("Boleto comprado para el corona capital");
     boletosDisponibles--;
     console.log("quedan: "+boletosDisponibles);
     console.log("___________________________________");
}while(boletosDisponibles > 0);


//try catch finally
try{
    //código suceptible a fallar
    throw "orden 66";
}catch(error){
    console.error("erroooooor");
    console.warn(error);
}finally{
    console.warn("Ella no te ama :,)");
}