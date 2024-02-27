document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: 1, name: "Bitcoin", price: 45000, quantity: 0, image: "bitcoin.jpg" },
        { id: 2, name: "Ethereum", price: 10000, quantity: 0, image: "etherum.jpg" },
        { id: 3, name: "Pi Coin", price: 31, quantity: 0, image: "Pi.jpg" },
        
    ];

    const panierElement = document.getElementById("panier");

    function afficherPanier() {
        panierElement.innerHTML = ""; 

        products.forEach(product => {
            const itemElement = document.createElement("div");
            const total = product.price * product.quantity;

            itemElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px;">
                <br>
                <span>${product.name} <br></span>
                <button onclick="ajouterQuantite(${product.id})">+</button>
                <span>${product.quantity}</span>
                <button onclick="diminuerQuantite(${product.id})">-</button>
                <span>Total: ${total} $</span>
                
            `;
            panierElement.appendChild(itemElement);
        });

        const totalPanier = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
        panierElement.innerHTML += `<div>Total du panier: ${totalPanier}$ </div>`;
    }

    window.ajouterQuantite = function (productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            product.quantity += 1;
            afficherPanier();
        }
    };

    window.diminuerQuantite = function (productId) {
        const product = products.find(p => p.id === productId);
        if (product && product.quantity > 0) {
            product.quantity -= 1;
            afficherPanier();
        }
    };

    afficherPanier();
});