let currencies = [
  {shortname: "AUD", name: "Австралійський долар", rate: 16.155, amount:10},
  {shortname: "AZD", name: "Азербайджанський манат", rate: 14.4655, amount:10},
  {shortname: "BYN", name: "Бiлоруський рубль", rate: 10.9976, amount:100},
  {shortname: "HKD", name: "Гонконгівський долар", rate: 3.1511, amount:500},
  {shortname: "DKK", name: "Данська крона", rate: 3.6037, amount:500},
  {shortname: "USD", name: "Долар США", rate: 24.561, amount:10},
  {shortname: "EUR", name: "Євро", rate: 26.9299, amount:10},
  {shortname: "EGP", name: "Єгипетський фунт", rate: 1.5739, amount:500},
  {shortname: "PLN", name: "Злотий", rate: 6.2426, amount:250},
  {shortname: "CAD", name: "Канадський долар", rate: 18.3881, amount:100},
  {shortname: "HRK", name: "Куна", rate: 3.6095, amount:100},
  {shortname: "MDL", name: "Молдовський лей", rate: 1.3754, amount:500},
  {shortname: "UAH", name: "Українська гривня", rate: 1, amount:100},
];

console.log("Currencies:");

currencies.forEach((currency) => {
  console.log(`- ${currency.shortname} (${currency.name}) `);
  console.log(`  ${currency.amount}X${currency.rate} = ${Math.round(currency.amount*currency.rate*100)/100} UAH`)
});

var totalCost = currencies.reduce((prev, currency) => {
  return prev + (Math.round(currency.amount*currency.rate*100)/100);
}, 0);

console.log(`Total cost: ${totalCost} UAH`);