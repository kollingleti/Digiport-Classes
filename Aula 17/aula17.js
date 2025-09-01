// --------------------------
// 1. Discount Function
// --------------------------
// Create a function `discount10(price)` that receives a price and returns the price after applying a 10% discount.

function discount10(price) {
  return price * 0.9; // 10% de desconto
}

// Exemplo de uso:
const price = 100;
const discountedPrice = discount10(price);
console.log(discountedPrice); // Saída: 90

// --------------------------
// 2. Introduction to Classes
// --------------------------
// Create a class Product with:
// - properties: name, price
// - method: describe() returning a string like "Product: Rice, Price: $12"
// Test by creating a few products (e.g., Rice, Beans, Milk)

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  describe() {
    return `Product: ${this.name}, Price: $${this.price}`;
  }
}

// Exemplo de uso:
const rice = new Product('Rice', 12);
const beans = new Product('Beans', 8);
const milk = new Product('Milk', 5);

console.log(rice.describe()); // Saída: Product: Rice, Price: \$12
console.log(beans.describe()); // Saída: Product: Beans, Price: \$8
console.log(milk.describe()); // Saída: Product: Milk, Price: \$5


// --------------------------
// 3. Cart Class + Methods
// --------------------------
// Create a class Cart with:
// - property: products (array)
// - method: add(product) to add a Product
// - method: total() to return the sum of all product prices
// - method: showProducts() to return a string listing all products
// - method: applyDiscount() that applies the `discount10` function
//   to all products' prices using the function you created above

class Cart {
  constructor() {
    this.products = [];
  }

  add(product) {
    this.products.push(product);
  }

  total() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }

  showProducts() {
    return this.products.map(product => product.describe()).join('\n');
  }

  applyDiscount() {
    this.products.forEach(product => {
      product.price = discount10(product.price);
    });
  }
}

// Exemplo de uso:
const cart = new Cart();
cart.add(rice);
cart.add(beans);
cart.add(milk);

console.log(cart.showProducts()); // Saída: Product: Rice, Price: \$12\nProduct: Beans, Price: \$8\nProduct: Milk, Price: \$5
console.log(cart.total()); // Saída: 25 (soma dos preços)
cart.applyDiscount();
console.log(cart.showProducts()); // Saída após desconto: Product: Rice, Price: \$10.80\nProduct: Beans, Price: \$7.20\nProduct: Milk, Price: \$4.50


// --------------------------
// 4. Mini-Project Integration
// --------------------------
// Open index.html and, using ctrl+shift+P, type "Open with Live Server" to preview your shopping cart.
// You can also change the background color or alter the product list in the HTML file.
// Feel free to experiment with different styles and layouts, and also create new functions, buttons, or features!
