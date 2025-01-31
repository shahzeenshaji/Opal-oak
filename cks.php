<? php
$products = [
    "t-shirt" => "$15",
    "jeans" => "$40",
    "hoodie" => "$30",
    "dress" => "$50",
    "jacket" => "$60"
];


if (isset($_GET['product'])) {
    $product = strtolower(trim($_GET['product']));
    
    
    if (array_key_exists($product, $products)) {
        echo "✅ The price of '$product' is " . $products[$product];
    } else {
        echo "❌ Sorry, '$product' is not available in our store.";
    }
} else {
    echo "⚠️ Please enter a product name.";
}

?>