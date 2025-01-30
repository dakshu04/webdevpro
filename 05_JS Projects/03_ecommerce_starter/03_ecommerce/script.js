document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Product 1", price: 29.99 },
        { id: 2, name: "Product 2", price: 19.99 },
        { id: 3, name: "Product 3", price: 59.99 }
    ];

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalMessage = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkOutBtn = document.getElementById("checkout-btn");


    // Render Products List
    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span> 
            <button class="add-to-cart" data-id="${product.id}">Add to cart</button>
            <button class="delete-from-cart" data-id="${product.id}">Delete</button>
        `;
        productList.appendChild(productDiv);
    });

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart))
    }

    productList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const productId = parseInt(e.target.getAttribute("data-id"));
            const product = products.find((p) => p.id === productId);

            if (!product) return;

            if (e.target.classList.contains("add-to-cart")) {
                addToCart(product);
            } else if (e.target.classList.contains("delete-from-cart")) {
                deleteFromCart(product);
            }
        }
    });

    function addToCart(product) {
        cart.push(product);
        saveCart(); // Save to local storage
        renderCart();
    }

    function deleteFromCart(product) {
        const index = cart.findIndex((item) => item.id === product.id);
        if (index !== -1) {
            cart.splice(index, 1);
        } else {
            alert('This item is not added yet');
        }
        saveCart();//update local storage
        renderCart();
    }

    function renderCart() {
        cartItems.innerHTML = "";
        let totalPrice = 0;

        if (cart.length > 0) {
            emptyCartMessage.classList.add("hidden");
            cartTotalMessage.classList.remove("hidden");

            cart.forEach((item) => {
                totalPrice += item.price;
                const cartItem = document.createElement("div");
                cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
                cartItems.appendChild(cartItem);
            });

            totalPriceDisplay.textContent = totalPrice.toFixed(2);
        } else {
            emptyCartMessage.classList.remove("hidden");
            cartTotalMessage.classList.add("hidden");
            totalPriceDisplay.textContent = "0.00";
        }
    }

    checkOutBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Cart is already empty!");
            return;
        }
        cart.length = 0;
        saveCart();
        alert("Checkout Successfully");
        renderCart();
    });
    renderCart() // ✅ ADDED: Load cart from local storage when page loads
});
