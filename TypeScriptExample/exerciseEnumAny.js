var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Avaliable"] = "Avaliable";
    ProductStatus["OutOfStock"] = "Out of Stock";
    ProductStatus["Discontinued"] = "Discontinued";
})(ProductStatus || (ProductStatus = {}));
var products = [
    { name: "Laptop", status: ProductStatus.Avaliable, price: 1200 },
    { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
    { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];
function displayProductDetails(productdetail) {
    productdetail.forEach(function (product) {
        console.log("Product: ".concat(product.name, ", status: ").concat(product.status, ", price: ").concat(product.price));
    });
}
displayProductDetails(products);
