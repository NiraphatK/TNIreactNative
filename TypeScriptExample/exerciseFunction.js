var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Shirt", price: 1200, category: "Apparel" },
    { name: "Coffee Maker", price: 2500, category: "Appliances" },
];
function filterProductsbyPrice(products, minPrice) {
    return products.filter(function (product) { return product.price > minPrice; });
}
function discountProduct(products) {
    return products.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
var filterProduct = filterProductsbyPrice(products, 2000);
var discountProducts = discountProduct(filterProduct);
console.log(discountProducts);
// function filterProductsbyPrice(minPrice: number): Product[] {
//   return products
//     .filter((product) => product.price > minPrice)
//     .map((product) => ({
//       ...product,
//       price: product.price * 0.9,
//     }));
// }
// const minPrice = 2000;
// const result = filterProductsbyPrice(minPrice);
// console.log(result);
