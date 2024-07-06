enum ProductStatus {
  Avaliable = "Avaliable",
  OutOfStock = "Out of Stock",
  Discontinued = "Discontinued",
}

let products: any[] = [
  { name: "Laptop", status: ProductStatus.Avaliable, price: 1200 },
  { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
  { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];

function displayProductDetails(productdetail: any[]) {
  productdetail.forEach((product) => {
    console.log(
      `Product: ${product.name}, status: ${product.status}, price: ${product.price}`
    );
  });
}

displayProductDetails(products);
