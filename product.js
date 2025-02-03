//? AQUÍ CONTENDREMOS LAS FUNCIONES PARA GESTIONAR LOS PRODUCTOS

let products = [];
let id = 0;

// Reiniciamos los productos 

function resetProducts() {
    products = [];
    id = 0;
}

// Agregar un producto

function addProduct(name, price) {
    if (!name || !price) {
        throw new Error('Name and price are required');
    }
    if (products.some((product) => product.name === name)) {
        throw new Error('Product already exists');
        // .some verifica si un producto ya existe antes de agregarlo.
    }
    id++;
    const product = { id, name, price };
    products.push(product);
    // con el método push agregamos un nuevo producto a la lista
    // al final del array
    return product;
}

// Eliminar un producto por ID

function removeProduct(productId) {
    const index = products.findIndex((product) => product.id === productId);
    if (index === -1) {
        // .findIndex busca la posición del producto antes de eliminarlo.
        throw new Error('Product not found');
    }
    products.splice(index, 1);
    // con el .splice eliminamos cantidad de elementos desde el indice
    // en este caso, eliminamos 1 producto de la lista en la posición index.
}

// Obtener todos los productos

function getProducts() {
    return products;
}

// Obtener un producto por ID
function getProduct(productId) {
    const product = products.find((product) => product.id === productId);
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
}

// Actualizar un producto por ID
function updateProduct(productId, name, price) {
    const product = products.find((product) => product.id === productId);
    if (!product) {
        throw new Error('Product not found');
    }
    if (name) product.name = name;
    if (price) product.price = price;
    return product;
}

// Exportamos las funciones
module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct
};