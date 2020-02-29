let currencies = [
    {name: "hrn", cost: 1},
    {name: "usd", cost: 25.2},
    {name: "eur", cost: 30.1},
];

console.log("Currencies:");

currencies.forEach((currency) => {
    console.log(`- ${currency.name} costs ${currency.cost} hrn`);
});

var totalCost = currencies.reduce((prev, currency) => {
    return prev + currency.cost;
}, 0);

console.log("Total cost: ", totalCost);