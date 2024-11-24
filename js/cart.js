document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const price = parseFloat(item.price);
            const quantity = item.quantity || 1;

            if (!isNaN(price)) {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>${item.description}</p>
                        <p class="price">$${(price * quantity).toFixed(2)}</p>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span class="quantity" data-id="${item.id}">${quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                    <div class="cart-item-actions">
                        <button class="remove-item" data-id="${item.id}">
                            <i class="ri-delete-bin-line"></i>
                        </button>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItem);

                total += price * quantity;
            }
        });

        cartTotal.textContent = `$${total.toFixed(2)}`;

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = this.getAttribute('data-id');
                cart = cart.filter(item => item.id !== itemId);
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
            });
        });

        document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = this.getAttribute('data-id');
                const action = this.classList.contains('increase') ? 'increase' : 'decrease';
                const item = cart.find(item => item.id === itemId);
                
                if (item) {
                    item.quantity = item.quantity || 1;
                    
                    if (action === 'increase') {
                        item.quantity += 1;
                    } else if (action === 'decrease' && item.quantity > 1) {
                        item.quantity -= 1;
                    }
                    
                    localStorage.setItem('cart', JSON.stringify(cart));
                    renderCart();
                }
            });
        });
    }

    renderCart();
});
