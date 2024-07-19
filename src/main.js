// Creating an object
const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: 'Google',
    total: 1000,
};

// Se puede cambiar el valor de las propiedades
invoice.id = 20;

console.log(invoice);

// Accessing object properties
console.log(invoice.id); // Output: John
console.log(invoice.name); // Output: 30
console.log(invoice.date); // Output: Developer

// Modifying object properties
invoice.name = 35;
console.log(invoice.name); // Output: 35

// Adding new properties to an object
invoice.location = "New York";
console.log(invoice.location); // Output: New York

// Deleting a property from an object
delete invoice.date;
console.log(invoice.date); // Output: undefined