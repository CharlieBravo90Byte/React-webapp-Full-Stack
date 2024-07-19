
const products = ['mesa','silla', 'notebook','teclado'];

products.push('pantalla lcd', 'sony tv');

console.log(products);


// existen dos versiones para implementar
// 1 
products.forEach(function(el) {
    console.log(el);
});

//2 
products.forEach(el => console.log(el));


for(const product of products){
    console.log(product);
};


for(let i = 0; i < products.length; i++) {
    const element = products[i];
    console.log(products[i]);
}

console.log(products[0]);