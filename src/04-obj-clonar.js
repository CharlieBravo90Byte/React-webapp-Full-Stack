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

//const invoice2 = invoice;
const invoice2 = { ...invoice };

const result = invoice === invoice2;

if (result) {
    console.log(result);
}
else {
    console.log('No son iguales');
}    

invoice2.id = 20;

console.log(invoice.id);
console.log(invoice2.id);