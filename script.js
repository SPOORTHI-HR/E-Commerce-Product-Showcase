let cart = [];
const cartCountElement = document.getElementById("cart-count");
const cartItemsElement = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
document.querySelectorAll('.add-to-cart').forEach(button => {
button.addEventListener('click', () => {
const productElement = button.closest('.product');
const productId = productElement.getAttribute('data-id');
const productName = productElement.getAttribute('data-name');
const productPrice = parseFloat(productElement.getAttribute('data-price'));
// Check if product already in cart
const existingProduct = cart.find(product => product.id === productId);
if (existingProduct) {
existingProduct.quantity += 1;
} else {
cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
}
updateCart();
});
});
function updateCart() {
cartCountElement.textContent = cart.reduce((total, product) => total + product.quantity, 0);
// Clear the current cart items
cartItemsElement.innerHTML = '';
let total = 0;
cart.forEach(product => {
const li = document.createElement('li');
li.textContent = `${product.name} - $${product.price} (x${product.quantity})`;
cartItemsElement.appendChild(li);
total += product.price * product.quantity;
});
totalPriceElement.textContent = total.toFixed(2);
}
document.getElementById("checkout").addEventListener("click", () => {
if (cart.length > 0) {
alert("Your order placed!");
alert("Thank you for your purchase!");
cart = [];
updateCart();
} else {
alert("Your cart is empty!");
}
});
