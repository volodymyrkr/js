let persons = [
    {name: "Volodymyr", yearsOfBirth: 1981},
    {name: "Elena", yearsOfBirth: 1988},
    {name: "Steshka", yearsOfBirth: 2013},
    {name: "Emilie", yearsOfBirth: 2015},
];

var date = new Date();
var currentYear = date.getFullYear();

console.log("My family:");

persons.forEach((person) => {
    console.log("-",person.name, currentYear - person.yearsOfBirth);
});

var totalAmountOfYears = persons.reduce((prev, person) => {
    return prev + currentYear - person.yearsOfBirth;
}, 0);

console.log("Total amount of years: ", totalAmountOfYears);