for (let i = 0; i < 19; i++) {
    if ((i % 2) != 0) {
        continue;//te regresa al for
    }
    if ( i == 10){
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

console.log(var1+var1);//nulo más nulo es cero? xd
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6 + var6);

var6 = 5;
console.log(var6);