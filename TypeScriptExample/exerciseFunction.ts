type Product = {
  name: string;
  price: number;
  category: string;
};

let products: Product[] = [
  { name: "Laptop", price: 50000, category: "Electronics" },
  { name: "Shirt", price: 1200, category: "Apparel" },
  { name: "Coffee Maker", price: 2500, category: "Appliances" },
];

function filterProductsbyPrice(
  products: Product[],
  minPrice: number
): Product[] {
  return products.filter((product) => product.price > minPrice);
}

function discountProduct(products: Product[]): Product[] {
  return products.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));
}
let filterProduct = filterProductsbyPrice(products, 2000);
let discountProducts = discountProduct(filterProduct);

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
