
    // Load cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        const cartContainer = document.getElementById('cart');
        cartContainer.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            cartContainer.innerHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <p>Quantity: 
                        <button class="normal" onclick="decreaseQuantity(${index})">-</button> 
                        ${item.quantity} 
                        <button class="normal" onclick="increaseQuantity(${index})">+</button>
                    </p>
                    <p>Total: $${itemTotal}</p>
                    <button class="normal" onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
        });

        document.getElementById('total').innerText = total;
    }

    function increaseQuantity(index) {
        cart[index].quantity += 1;
        updateCart();
    }

    function decreaseQuantity(index) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            removeFromCart(index);
        }
        updateCart();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    // Initial render
    renderCart();

