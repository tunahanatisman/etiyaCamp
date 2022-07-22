function addToCart(quantity, productName = "Armut") {
    console.log(quantity);
    console.log(productName);
}

//addToCart(1);

let addToCart2 = (quantity) => {
    console.log(quantity)
}

addToCart2();

let products = [
    { productName: "Elma", unitPrice: 10, quantity: 5 },
    { productName: "Armut", unitPrice: 10, quantity: 5 },
    { productName: "Karpuz", unitPrice: 10, quantity: 5 }
]

//products.push({ productName: "Üzüm", unitPrice: 100, quantity: 15 })

function addProduct(product) {
    let productToFind = products.find(p => p.productName === product.productName)
    if (productToFind == undefined) {
        products.push(product)
    } else {
        console.log("ürün zaten mevcut")
    }
}

addProduct({ productName: "Üzüm", unitPrice: 100, quantity: 15 })
console.log(products);

let filteredProducts = products.filter(p => p.unitPrice < 100)

console.log(filteredProducts)

let searchKey = "ar"
let findProducts = products.filter(p => p.productName.toLowerCase().includes(searchKey))
console.log(findProducts)

const array = [];

array.forEach(item => {
    //Arrow function
    console.log(item);
});

//map
array.map(meyve => {
    console.log(meyve);
    return meyve + " Meyvesi";
});