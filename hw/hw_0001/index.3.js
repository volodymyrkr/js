let currencies = [
    {shortname: "AUD", name: "Австралійський долар", cost: 16.155},
    {shortname: "AZD", name: "Азербайджанський манат", cost: 14.4655},
    {shortname: "BYN", name: "Бiлоруський рубль", cost: 10.9976},
    {shortname: "HKD", name: "Гонконгівський долар", cost: 3.1511},
    {shortname: "DKK", name: "Данська крона", cost: 3.6037},
    {shortname: "USD", name: "Долар США", cost: 24.561},
    {shortname: "EUR", name: "Євро", cost: 26.9299},
    {shortname: "EGP", name: "Єгипетський фунт", cost: 1.5739},
    {shortname: "PLN", name: "Злотий", cost: 6.2426},
    {shortname: "CAD", name: "Канадський долар", cost: 18.3881},
    {shortname: "HRK", name: "Куна", cost: 3.6095},
    {shortname: "MDL", name: "Молдовський лей", cost: 1.3754},
];

console.log("Currencies:");

currencies.forEach((currency) => {
    console.log(`- ${currency.shortname} costs ${currency.cost} hrn (${currency.name})`);
});

var totalCost = currencies.reduce((prev, currency) => {
    return prev + currency.cost;
}, 0);

console.log("Total cost: ", totalCost);