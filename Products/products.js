// script.js

const products = [
    { name: "Laptop", price: 999.99, quantityInStock: 10 },
    { name: "Smartphone", price: 499.99, quantityInStock: 15 },
    { name: "Tablet", price: 299.99, quantityInStock: 8 },
    { name: "Headphones", price: 89.99, quantityInStock: 30 },
    { name: "Charger", price: 19.99, quantityInStock: 50 }
];

const cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price} (In Stock: ${product.quantityInStock})`;
        const button = document.createElement('button');
        button.textContent = 'Add to Cart';
        button.onclick = () => addToCart(product.name, 1);
        li.appendChild(button);
        productList.appendChild(li);
    });
}

function addToCart(productName, quantity) {
    const product = products.find(p => p.name === productName);
    if (!product) {
        console.log('Product not found');
        return;
    }
    if (product.quantityInStock < quantity) {
        console.log('Not enough stock');
        return;
    }
    const cartItem = cart.find(item => item.name === productName);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ name: productName, price: product.price, quantity });
    }
    product.quantityInStock -= quantity;
    viewCart();
}

function viewCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    let totalCost = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity} = $${item.price * item.quantity}`;
        cartList.appendChild(li);
        totalCost += item.price * item.quantity;
    });
    document.getElementById('total-cost').textContent = `Total: $${totalCost.toFixed(2)}`;
}

function removeFromCart(productName) {
    const cartIndex = cart.findIndex(item => item.name === productName);
    if (cartIndex > -1) {
        const product = products.find(p => p.name === productName);
        product.quantityInStock += cart[cartIndex].quantity;
        cart.splice(cartIndex, 1);
        viewCart();
    } else {
        console.log('Product not in cart');
    }
}

function checkout() {
    let totalCost = 0;
    cart.forEach(item => {
        totalCost += item.price * item.quantity;
    });
    cart.length = 0;
    document.getElementById('cart-list').innerHTML = '';
    document.getElementById('total-cost').textContent = '';
    console.log(`Checkout complete. Total cost: $${totalCost.toFixed(2)}`);
}

document.addEventListener('DOMContentLoaded', displayProducts);
