<?php
$products = [
    "mesh beige bodycon" => "✨ Mesh Beige Bodycon:<br>- Material: Stretchable mesh with inner lining<br>- Fit: Body-hugging<br>- Occasion: Party, Evening wear<br>- Features: Sheer detailing, breathable fabric",
    "black leather jacket" => "🖤 Black Leather Jacket:<br>- Material: Genuine/Faux leather<br>- Fit: Regular fit<br>- Features: Quilted pattern, zipper pockets, biker style",
    "black shirt" => "👕 Black Shirt:<br>- Material: Premium cotton blend<br>- Fit: Slim fit<br>- Features: Button-down, wrinkle-resistant",
    "white mesh ruffled dress" => "👗 White Mesh Ruffled Dress:<br>- Material: Soft mesh with inner lining<br>- Fit: Flowy, A-line<br>- Features: Layered ruffles, lightweight",
    "black classy low neck" => "🖤 Black Classy Low Neck:<br>- Material: Ribbed stretch fabric<br>- Fit: Bodycon<br>- Features: Elegant silhouette, soft fabric",
    "grey pullover" => "🩶 Grey Pullover:<br>- Material: Wool blend<br>- Fit: Oversized fit<br>- Features: Cozy and warm, minimal design",
    "blue&white striped pajama set" => "💙 Blue & White Striped Pajama Set:<br>- Material: Soft cotton<br>- Fit: Relaxed fit<br>- Features: Breathable fabric, classic stripes",
    "blue&white floral sundress" => "🌸 Blue & White Floral Sundress:<br>- Material: Cotton blend<br>- Fit: Flowy A-line<br>- Features: Floral print, lightweight fabric",
    "black bodycon" => "🖤 Black Bodycon:<br>- Material: Stretchable polyester-spandex blend<br>- Fit: Body-hugging<br>- Features: Figure-enhancing, chic design",
    "pistachio green sundress" => "💚 Pistachio Green Sundress:<br>- Material: Cotton-linen blend<br>- Fit: Relaxed A-line<br>- Features: Pastel aesthetic, breathable fabric",
    "baby pink crop top" => "💖 Baby Pink Crop Top:<br>- Material: Ribbed cotton blend<br>- Fit: Slim fit<br>- Features: Stretchable, lightweight",
    "brown short sundress" => "🤎 Brown Short Sundress:<br>- Material: Chiffon with inner lining<br>- Fit: A-line<br>- Features: Flowy, earthy tones",
    "white co ord" => "🤍 White Co-ord Set:<br>- Material: Polyester-cotton blend<br>- Fit: Relaxed fit<br>- Features: Matching set, elegant design",
    "black full sleeve body" => "🖤 Black Full Sleeve Body:<br>- Material: Stretchable ribbed fabric<br>- Fit: Slim fit<br>- Features: Versatile, comfortable fit",
    "black short trenchcoat" => "🖤 Black Short Trench Coat:<br>- Material: Wool blend<br>- Fit: Tailored fit<br>- Features: Elegant silhouette, warm fabric",
    "grey top" => "🩶 Grey Top:<br>- Material: Soft cotton blend<br>- Fit: Regular fit<br>- Features: Minimalist, comfortable"
];

if (isset($_GET['product'])) {
    $product = strtolower(trim($_GET['product']));

    if (array_key_exists($product, $products)) {
        echo $products[$product];
    } else {
        echo "❌ Product not found. Try another item.";
    }
} else {
    echo "⚠️ Please enter a product name.";
}
?>
