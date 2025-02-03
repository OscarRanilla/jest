// Importamos las funciones en el archivo de prueba

const { resetProducts,  addProduct, removeProduct, getProducts, 
    getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});

// Pruebas para addProduct

describe('addProduct', () => {
    it('should add a product', () => {
        const product = addProduct('MacBook', 1200);
        expect(product).toEqual({ id: 1, name: 'MacBook', price: 1200 });
    });

    it('should increment the id for each product', () => {
        addProduct('iPhone', 800);
        const product2 = addProduct('iPad', 600);
        expect(product2.id).toBe(2);
    });

    it('should throw an error if name or price is missing', () => {
        expect(() => addProduct(null, 100)).toThrow('Name and price are required');
        expect(() => addProduct('MacBook')).toThrow('Name and price are required');
    });

    it('should throw an error if product already exists', () => {
        addProduct('MacBook', 1200);
        expect(() => addProduct('MacBook', 1300)).toThrow('Product already exists');
    });
});

// Pruebas para removeProduct

describe('removeProduct', () => {
    it('should remove a product', () => {
        const product = addProduct('MacBook', 1200);
        removeProduct(product.id);
        expect(getProducts()).toEqual([]);
    });

    it('should throw an error if product does not exist', () => {
        expect(() => removeProduct(99)).toThrow('Product not found');
    });
});

// Pruebas para getProduct

describe('getProduct', () => {
    it('should return a product by id', () => {
        const product = addProduct('MacBook', 1200);
        expect(getProduct(product.id)).toEqual(product);
    });

    it('should throw an error if product does not exist', () => {
        expect(() => getProduct(99)).toThrow('Product not found');
    });
});

// Pruebas para updateProduct

describe('updateProduct', () => {
    it('should update a product by id', () => {
        const product = addProduct('MacBook', 1200);
        const updated = updateProduct(product.id, 'MacBook Pro', 1500);
        expect(updated).toEqual({ id: 1, name: 'MacBook Pro', price: 1500 });
    });

    it('should throw an error if product does not exist', () => {
        expect(() => updateProduct(99, 'iMac', 2000)).toThrow('Product not found');
    });

    it('should update only the name', () => {
        const product = addProduct('MacBook', 1200);
        const updated = updateProduct(product.id, 'MacBook Pro 2');
        expect(updated).toEqual({ id: 1, name: 'MacBook Pro 2', price: 1200 });
    });

    it('should update only the price', () => {
        const product = addProduct('MacBook', 1200);
        const updated = updateProduct(product.id, null, 1400);
        expect(updated).toEqual({ id: 1, name: 'MacBook', price: 1400 });
    });
});


