let goods = [
    {name: "Beer", cost: 1.5},
    {name: "Milk", cost: 2.5},
    {name: "Bread", cost: 4.5},
    {name: "Butter", cost: 1.5},
    {name: "Sausages", cost: 3},
];

var date = new Date();

console.log("My buyings:");

goods.forEach((good) => {
    console.log(`- ${good.name} costs ${good.cost}`);
});

var totalCost = goods.reduce((prev, good) => {
    return prev + good.cost;
}, 0);

console.log("Total cost: ", totalCost);