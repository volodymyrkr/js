let products = [
  {name: "Beer", weight: "500", quantity: 2, price: 17.8, sale: false, discount:0.5}, //sale: 0 = false
  {name: "Butter", weight: "400", quantity: 1, price: 30.5, sale: true, discount:0.95}, //sale: 1 = true
  {name: "Sausages", weight: "100", quantity: 15, price: 8.4, sale: true, discount:0.95},
  {name: "Eggs", weight: "500", quantity: 2, price: 23.95, sale: true, discount:1},
  {name: "Pepsi", weight: "2000", quantity: 3, price: 23.95, sale: true, discount:1},
  {name: "Bread", weight: "400", quantity: 2, price: 15.8, sale: true, discount:1},
  {name: "Kinkali", weight: "800", quantity: 2, price: 39.95, sale: true, discount:1},
  {name: "Milk", weight: "900", quantity: 1, price: 38.8, sale: true, discount:1},
  {name: "Wheat flour", weight: "2000", quantity: 1, price: 42.95, sale: true, discount:0.95},
  {name: "Condensed milk", weight: "300", quantity: 2, price: 78.4, sale: true, discount:1},
  {name: "White chocolate", weight: "100", quantity: 1, price: 74.7, sale: true, discount:1},
  {name: "Sugar", weight: "1000", quantity: 3, price: 15.5, sale: true, discount:1},
  {name: "Oatmeal", weight: "1000", quantity: 2, price: 23.3, sale: false, discount:1},
  {name: "Marshmallows", weight: "500", quantity: 4, price: 45.85, sale: true, discount:1},
];

console.log("My buyings:");

products.forEach((product) => {
  if (product.sale === true) {
  console.log(`- ${product.name} ${product.quantity}.`);
  console.log(`  ${product.weight/1000}Х${product.price} = ${Math.round(product.price*product.quantity*product.discount*100)/100} `);
}});
let totalCost = products.reduce((prev, product) => {
  return product.sale ? prev + product.price*product.quantity*product.discount : prev
}, 0);
console.log(`Total cost ${Math.round(totalCost*100)/100} UAH`);
