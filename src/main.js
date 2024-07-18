

const sayHello =(name = 'Abraham', age = 23) => 
    `Hello world!!! ${name} ${age}`;
const add = (a = 0, b = 0) => a + b;


const result = sayHello('Carlos', 30);

console.log(result);
console.log(add(2, 3));