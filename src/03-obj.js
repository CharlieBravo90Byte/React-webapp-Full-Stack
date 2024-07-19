// Creating an object
const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id:2,
        name: 'John',
        lastName: 'Doe',
        age:20,
    },
    items: [
        { 
            id: 1, 
            name: 'lapices', 
            price: 500,
            quantity:2, 
        },
        { 
            id: 2, 
            name: 'borradores', 
            price: 100,
            quantity:3, 
        },
        { 
            id: 3, 
            name: 'cuadernos', 
            price: 200,
            quantity:10,
        }

    ],

    //total: 1000,

    total: function() {
        let total = 0;

        this.items.forEach(item => {
            total = total +item.price * item.quantity;
        });
        return total;
    },

    greeting: function() { 
        return `Hola ${invoice.client.name} ${invoice.client.lastName}`; 
    }
};

// Se puede cambiar el valor de las propiedades
invoice.id = 20;
invoice.client.name = 'Charlie';

console.log(invoice);

const greeting = invoice.greeting();
console.log(greeting);

console.log(invoice.total());

/*
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
*/