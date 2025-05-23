// Funciones avanzadas

// Ciudadanos de primera clase 
const  greet = function (name) {
    console.log(`Hola ${name}`);
}

greet('seipel');

function processGreeting(greetingFunction, name) {
    greetingFunction(name);
}

function returnGreeting(name) {
    return greet;
}

const greet2 = returnGreeting();

greet2('Santiago')

// Arrow functions avanzadas

// - Retorno implícito 
const multyply = (a, b) => a * b;
console.log(multyply(2, 20));
 
// - this léxico 
const handler = {
    name: 'Santiago',
    lastName: 'Seipel',
    greeting: function (){
        console.log(`Hola ${this.name} ${this.lastName}`)
    },
    arrowGreeting: () => {
        console.log(`Hola ${this.name} ${this.lastName}`)
    }
}

handler.greeting()
handler.arrowGreeting();

// IIFE (Expresión de Función Invocada Inmediatamente)

// - IIFE clásico
(function() {
    console.log("IIFE clásico")
})();

// - IIFE arrow function
(() => {
    console.log("IIFE arrow function")
})()

// Parámetros Rest (...)

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(5, 20, 50, 20, 30,123));
console.log(sum(5, 20, 50));

// Operador Spread (...)
const numbers = [1, 2, 3];
function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // Con Spread


// Closures (Clausuras)

function createCounter() {
    let counter = 0;
    return function() {
        counter++
        console.log(`El contador va en: ${counter}`);
    }
}

const counter = createCounter();
counter();
counter();
counter();
counter();
const counter2 = createCounter();
counter2();
counter2();
counter2();
counter2(); 
counter();
counter();
counter();
counter();

// Recursividad

function factorial(n){
    if (n <= 1){
        return 1
    }
    return n * factorial(n - 1)
}
 
console.log(factorial(25))

// Funciones parciales

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c);
    }
}

const sumWith = partialSum(4);
console.log(sumWith(2, 3)  ); 

// Currying

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(1)(2);
const sumC = sumAB(2);
console.log(sumC(3))
console.log(sumC(4))
console.log(sumAB(5)(7))

// Callbacks

function processData(data, callback) {
    const result = sum(...data);
    callback(result);
}

function processResult(result) {
    console.log(result);
}

function processResult2(result) {
    console.log(`El resultado de la suma es: ${result}`);
}

processData([2, 3, 5], processResult);
processData([2, 3, 5], processResult2);
processData([2, 3, 5], (result) => {
    console.log(`El resultado de la suma en la arrow function es: ${result}`);
});

