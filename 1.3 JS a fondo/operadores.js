let lista = [];
let x = 5;
let y = 10;

//Asignacion de adicion
x += y;
x += y;

lista.push(x);

console.log(lista);

//Asignacion de adicion
y -= x;

lista.push(y)

console.log(lista);

//Asignacion de multiplicacion
x *= y;

console.log("x = "+x);

x = 5;
y = 10;

x <<= y;

console.log("x = "+x);

//Asignacion de modulo o residuo

x = 5;
y = 11;

console.log(x%y);

y %= x;

console.log("y = "+y);

//estructura de control if
let var1 = 3;
let var2 = 4;

//operador igual
if(var1 == '3'){
    console.log("Son iguales");
}else{
    console.log("No son iguales");
}

//operador estrictamente igual
if(var1 === '3'){
    console.log("Son iguales");
}else{
    console.log("No son iguales");
}

//operador de desigualdad
if(var1 != var2){
    console.log("Son diferentes");
}else{
    console.log("Son iguales");
}

//opreador de desigualdad estricta
if(var1 !== '3'){
    console.log("Son diferentes");
}else{
    console.log("Son iguales");
}

// > mayor que
console.log(var1>var2);

// < menor que
console.log(var1<var2);
console.log(23 < 23);

//menor o igual que
console.log(23 <= 23);

// mayor o igual que
console.log( 23 >= 23);