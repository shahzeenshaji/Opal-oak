
const products = [
    { id: 1, name: "Floral Dress", category: "Dresses", price: 49.99, inStock: true },
    { id: 2, name: "Classic White Shirt", category: "Tops", price: 29.99, inStock: true },
    { id: 3, name: "Denim Jacket", category: "Outerwear", price: 79.99, inStock: false },
    { id: 4, name: "Black Skinny Jeans", category: "Bottoms", price: 39.99, inStock: true },
    { id: 5, name: "Cashmere Scarf", category: "Accessories", price: 24.99, inStock: true },
  ];
  
  let cart = [];
  
  function displayProducts(category = "All") {
    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = "";
  
    const filteredProducts = category === "All" 
      ? products 
      : products.filter(product => product.category === category);
  
    filteredProducts.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
  
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})" ${product.inStock ? "" : "disabled"}>
          ${product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      `;
  
      productContainer.appendChild(productDiv);
    });
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      alert(`${product.name} has been added to your cart!`);
      updateCartCount();
    }
  }
  
  function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
  }
  
  function initializeCategoryFilter() {
    const categoryFilter = document.getElementById("category-filter");
  
    const categories = ["All", ...new Set(products.map(product => product.category))];
    categories.forEach(category => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });
  
    categoryFilter.addEventListener("change", (e) => {
      displayProducts(e.target.value);
    });
  }
  
  function init() {
    displayProducts();
    initializeCategoryFilter();
  }
  
  window.onload = init;
  