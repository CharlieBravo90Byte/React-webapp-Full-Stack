

function sayHello(name = 'Abraham', age = 23) {
  //console.log('Hola mundo function');

  const greeting = `Hola mundo function ${name} edad: ${age}`;

  return greeting;

 //console.log('Hola mundo function');

 /*const greeting = 'Hola mundo function';
 return greeting;*/
}


const result = sayHello('Carlos', 30);

console.log(result);