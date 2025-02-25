document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("load-products").addEventListener("click", fetchProducts);
});

function fetchProducts() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "fetch_products.php", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById("product-list").innerHTML = xhr.responseText;
            } else {
                document.getElementById("product-list").innerHTML = "Error loading products.";
                console.error("Error: " + xhr.status);
            }
        }
    };

    xhr.send();
}
