let goods = [
  {name: "Beer", number: "0,5L", price: 17.90},
  {name: "Butter", number: "400g", price: 30.5},
  {name: "Sausages", number: "400g", price: 50.3},
  {name: "eggs ", number: "10 pieces", price: 20.55},
  {name: "Pepsi ", number: "2L", price: 23.9},
  {name: "Bread ", number: "400g", price: 12.8},
  {name: "Kinkali", number: " 0.8kg", price: 39.95},
  {name: "Milk ", number: "0.9kg", price: 38.8},
  {name: "Wheat flour  ", number: "2kg", price: 42.95},
  {name: "condensed milk ", number: "300g", price: 79.35},
  {name: "white chocolate ", number: "100g", price: 74.7},
  {name: "sugar ", number: "1kg", price: 14.5},
  {name: "oatmeal ", number: "1kg", price: 23.3},
  {name: "marshmallows ", number: "500g", price: 45.85},
];

console.log("My buyings:");

goods.forEach((good) => {
  console.log(`- ${good.name} ${good.number} costs ${good.price}`);
});

var totalCost = goods.reduce((prev, good) => {
  return prev + good.price;
}, 0);

console.log(`Total cost ${totalCost} UAH`);