class Pila {

    constructor() {
        this.pila = {};
        this.contador = 0;

    }

    //mete un elemento al final de una pila
    push(element){
        this.pila[this.contador] = element;
        this.contador++;
        return this.pila;
    }

    //sacar el último y devolverlo
    pop(){
        this.contador--;
        const element = this.pila[this.contador];
        delete this.pila[this.contador];
        return element;
    }

    //solo muetra el último elemento
    peek(){
        return this.pila[this.contador-1];
    }

    //devuelve el tamaño de la pila
    size(){
        return this.contador;
    }

    print(){
        console.log(this.pila);
    }
}

const miPila = new Pila();
console.log(miPila.size());
miPila.print();
console.log(miPila.push("Wakanda"));
console.log(miPila.push(5));
console.log(miPila.pop());
miPila.print();