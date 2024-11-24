document.addEventListener('DOMContentLoaded', function() {
    const orderSummary = document.getElementById('order-summary');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        orderSummary.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    let total = 0;
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'order-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; margin-right: 1rem;">
            <div>
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <p class="price">$${item.price.toFixed(2)}</p>
            </div>
        `;
        orderSummary.appendChild(itemDiv);
        total += item.price;
    });

    const totalDiv = document.createElement('div');
    totalDiv.className = 'order-total';
    totalDiv.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
    orderSummary.appendChild(totalDiv);
});
