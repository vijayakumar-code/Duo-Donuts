// Add to Cart Functionality
document.getElementById('add-to-cart').addEventListener('click', function () {
  const flavor = document.getElementById('flavor').value;
  const toppings = document.getElementById('toppings').value;
  const glaze = document.getElementById('glaze').value;

  const donut = {
    flavor: flavor,
    toppings: toppings,
    glaze: glaze,
  };

  // Save to localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(donut);
  localStorage.setItem('cart', JSON.stringify(cart));

  alert('Donut added to cart!');
});

// Display Cart Items
if (window.location.pathname.includes('cart.html')) {
  const cartItems = document.getElementById('cart-items');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    cartItems.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cartItems.innerHTML = cart
      .map(
        (item, index) => `
        <div class="cart-item">
          <p>Donut ${index + 1}: ${item.flavor} with ${item.toppings} and ${item.glaze} glaze</p>
        </div>
      `
      )
      .join('');
  }
}
