let products = [
  {name: "Lemon", weight: 200, quantity: 1, price: 10000, sale: false, discount: 0.5},
  {name: "Quince", weight: 100, quantity: 2, price: 10000, sale: false, discount: 0},
  {name: "Beer", weight: 500, quantity: 2, price: 1708, sale: false, discount: 0.5},
  {name: "Butter", weight: 400, quantity: 1, price: 3050, sale: true, discount: 0.05},
  {name: "Sausages", weight: 100, quantity: 15, price: 840, sale: true, discount: 0.05},
  {name: "Eggs", weight: 500, quantity: 2, price: 2395, sale: false, discount: 0},
  {name: "Pepsi", weight: 2000, quantity: 3, price: 2395, sale: false, discount: 0},
  {name: "Bread", weight: 400, quantity: 2, price: 1580, sale: false, discount: 0},
  {name: "Khinkali", weight: 800, quantity: 2, price: 3995, sale: false, discount: 1},
  {name: "Milk", weight: 900, quantity: 1, price: 3880, sale: true, discount: 0},
  {name: "WheatFlour", weight: 2000, quantity: 1, price: 4295, sale: true, discount: 0.05},
  {name: "CondensedMilk", weight: 300, quantity: 2, price: 7840, sale: false, discount: 0},
  {name: "WhiteChocolate", weight: 100, quantity: 1, price: 7470, sale: false, discount: 0},
  {name: "Sugar", weight: 1000, quantity: 3, price: 1550, sale: true, discount: 0},
  {name: "Oatmeal", weight: 1000, quantity: 2, price: 2330, sale: false, discount: 0},
  {name: "Marshmallows", weight: 500, quantity: 4, price: 4585, sale: false, discount: 0.1},
];

const delimiter = "\n".padEnd(32, "-");

console.log(delimiter);
products.forEach(
  (product) => {
    if (product.sale) {
      const fullPrice = product.price*1000/product.weight/100;
      const fullCost = product.price*product.quantity/100;
      const discount = fullCost*product.discount;
      const cost = fullCost - discount;

      console.log(``);
      console.log(`${product.name}`.padEnd(20, " "), `${fullPrice.toFixed(2).padStart(10, " ")}`);
      console.log(` ${product.quantity}x${(product.weight/1000).toFixed(3)}`.padEnd(20, " "), `${fullCost.toFixed(2).padStart(10, " ")}`);
      if (product.discount>0) {
        console.log(` Discount (${(product.discount*100).toFixed(2)}%):`.padEnd(20, " "), `${discount.toFixed(2).padStart(10, " ")}`);
      }
      console.log(`Cost:`.padEnd(20, " "), `${(fullCost-discount).toFixed(2)}`.padStart(10, " "));
    }
  }
);
console.log(delimiter);

let totalCost = products.reduce((prev, product) => {
  return product.sale
      ? prev + product.price*product.quantity*(1-product.discount)
      : prev
}, 0);

const totalCostStr = `Total cost:`.padEnd(16, " ")+ `${(totalCost/100).toFixed(2)} UAH`.padStart(15, " ");
console.log(totalCostStr.toUpperCase());
