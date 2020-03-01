let currencies = [
    {sortname: "AUD",name: "Австралійський долар",cost: 16.155},
    {sortname: "AZD",name: "Азербайджанський манат",cost: 14.4655},
    {sortname: "BYN",name: "Бiлоруський рубль", cost: 10.9976 },
    {sortname: "HKD",name: "Гонконгівський долар",cost: 3.1511},
    {sortname: "DKK",name: "Данська крона",cost: 3.6037},
    {sortname: "USD",name: "Долар США",cost: 24.561},
    {sortname: "EUR",name: "Євро",cost: 26.9299},
    {sortname: "EGP",name: "Єгипетський фунт",cost: 1.5739},
    {sortname: "PLN",name: "Злотий",cost: 6.2426},
    {sortname: "CAD",name: "Канадський долар",cost: 18.3881},
    {sortname: "HRK",name: "Куна",cost: 3.6095},
    {sortname: "MDL",name: "Молдовський лей",cost: 1.3754},
];

console.log("Currencies:");

currencies.forEach((currency) => {
    console.log(`- ${currency.sortname} costs ${currency.cost} hrn (${currency.name})`);
});

var totalCost = currencies.reduce((prev, currency) => {
    return prev + currency.cost;
}, 0);

console.log("Total cost: ", totalCost);