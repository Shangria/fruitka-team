(function () {
    const products = [
        {src: "./img/products/product-img-1.jpg", alt: "strawberry-img", title: "Strawberry", cost: 85, type: "berries"},
        {src: "./img/products/product-img-2.jpg", alt: "berry-img", title: "Berry", cost: 70, type: "berries"},
        {src: "./img/products/product-img-3.jpg", alt: "lemon-img", title: "Lemon", cost: 35, type: "citruses"},
        {src: "./img/products/product-img-4.jpg", alt: "kiwi-img", title: "Kiwi", cost: 50, type: "fruits"},
        {src: "./img/products/product-img-5.jpg", alt: "apple-img", title: "Apple", cost: 20, type: "fruits"},
        {src: "./img/products/product-img-6.jpg", alt: "raspberry-img", title: "Raspberry", cost: 60, type: "berries"},
        {src: "./img/products/product-img-7.jpg", alt: "lime-img", title: "Lime", cost: 90, type: "citruses"},
        {src: "./img/products/product-img-8.jpg", alt: "banana-img", title: "Banana", cost: 40, type: "fruits"},
        {src: "./img/products/product-img-9.jpg", alt: "orange-img", title: "Orange", cost: 35, type: "citruses"},
        {src: "./img/products/product-img-10.jpg", alt: "pear-img", title: "Pear", cost: 25, type: "fruits"},
        {src: "./img/products/product-img-11.jpg", alt: "guava-img", title: "Guava", cost: 90, type: "fruits"},
        {src: "./img/products/product-img-12.jpg", alt: "plum-img", title: "Plum", cost: 20, type: "fruits"},
        {src: "./img/products/product-img-13.jpg", alt: "grapes-img", title: "Grapes", cost: 55, type: "berries"},
        {src: "./img/products/product-img-14.jpg", alt: "blueberry-img", title: "Blueberry", cost: 85, type: "berries"},
        {src: "./img/products/product-img-15.jpg", alt: "mango-img", title: "Mango", cost: 35, type: "fruits"},
        {src: "./img/products/product-img-16.jpg", alt: "garnet-img", title: "Garnet", cost: 70, type: "fruits"},
        {src: "./img/products/product-img-17.jpg", alt: "morinda", title: "Morinda citrus-leaf", cost: 35, type: "citruses"},
        {src: "./img/products/product-img-18.jpg", alt: "watermelon-img", title: "Watermelon", cost: 85, type: "berries"},
        {src: "./img/products/product-img-19.jpg", alt: "melon-img", title: "Melon", cost: 70, type: "berries"},
    ];
    window.localStorage.setItem('products', JSON.stringify(products));
})();