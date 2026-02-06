let  products: Array<Eproduct>= [];

interface Eproduct{
    id: number;
    name: string;
    description: string;
    price: number;
    discount: number;
}

interface Iproduct{
    add(name: string,description : string, price: number, discount:number): void;
    update(id:number, product: Eproduct): void;
    delete(id: number): void;
    getAll(): void;
}

class Product implements Iproduct {
    constructor() {
    }
    
    add(name: string,description : string, price: number, discount:number): void {
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
    update(id:number, product: any): void {
        products = products.map((_product:Eproduct) => {
            if (_product.id === id) {
                return {..._product, ...product}
            }else{
                return _product;
            }
        });
        console.log('Product updated successfully', products);

    }
    delete(id: number): void {
        const index = products.findIndex(product => product.id === id);
        products.splice(index, 1);
        console.log('Product deleted successfully');

    }
    getAll(): void {
        products.forEach(product => {
            console.log(`Product: ${product.name}, Description: ${product.description}, Price: ${product.price}, Discount: ${product.discount}%`);
        });

    }
}

const product1 = new Product();

product1.add('Laptop','Dell Inspiron 15',55000,10);

product1.add('Mobile','Samsung Galaxy S21',70000,5);

product1.delete(1);

product1.update(2, {price: 65000, discount: 7});

product1.getAll();
