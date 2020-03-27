let persons = [
  {firstName: "Volodymyr", lastName: "Kravchenko" , yearsOfBirth: 1981},
  {firstName: "Elena", lastName: "Kravchenko" , yearsOfBirth: 1988},
  {firstName: "Steshka", lastName: "Kravchenko", yearsOfBirth: 2013},
  {firstName: "Emilie", lastName: "Kravchenko", yearsOfBirth: 2015},
  {firstName: "Dmytro", lastName: "Nedava" , yearsOfBirth: 2002},
  {firstName: "Lena", lastName: "Nedava" , yearsOfBirth: 1974},
  {firstName: "Sergey", lastName: "Nedava" , yearsOfBirth: 1974},
  {firstName: "Nastya", lastName: "Nedava" , yearsOfBirth: 1996},
  {firstName: "Nikita", lastName: "Nedava" , yearsOfBirth: 2013},
];

var date = new Date();
var currentYear = date.getFullYear();

console.log("My relatives:");

persons.forEach((person) => {
  console.log(`- ${person.firstName} ${person.lastName} ${currentYear - person.yearsOfBirth}`);
});

var totalAmountOfYears = persons.reduce((prev, person) => {
  return prev + currentYear - person.yearsOfBirth;
}, 0);

console.log("Total amount of years: ", totalAmountOfYears);