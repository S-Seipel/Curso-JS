const operation = (num1,num2, op) => {
    return op(num1, num2);
}

console.log(operation(1, 3, (a, b) => a + b))
console.log(operation(1, 3, (a, b) => a - b))
console.log(operation(1, 3, (a, b) => a * b))

const caca = (num1, num2,) => {
    const resultado = num1 + num2
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(resultado)
        }, 500)
    })
}

caca(1, 3)
    .then(result => console.log(result))
    