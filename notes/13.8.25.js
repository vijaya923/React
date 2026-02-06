let products = [];
class Product {
    constructor() {
    }
    add(name, description, price, discount) {
        const productInfo = {
            id: products.length + 1,
            name,
            description,
            price,
            discount,
        };
        products.push(productInfo);
        console.log('Product added successfully', productInfo);
    }
    update(id, product) {
        products = products.map((_product) => {
            if (_product.id === id) {
                return Object.assign(Object.assign({}, _product), product);
            }
            else {
                return _product;
            }
        });
        console.log('Product updated successfully', products);
    }
    delete(id) {
        const index = products.findIndex(product => product.id === id);
        products.splice(index, 1);
        console.log('Product deleted successfully');
    }
    getAll() {
        products.forEach(product => {
            console.log(`Product: ${product.name}, Description: ${product.description}, Price: ${product.price}, Discount: ${product.discount}%`);
        });
    }
}
const product1 = new Product();
product1.add('Laptop', 'Dell Inspiron 15', 55000, 10);
product1.add('Mobile', 'Samsung Galaxy S21', 70000, 5);
product1.delete(1);
product1.update(2, { price: 65000, discount: 7 });
product1.getAll();
