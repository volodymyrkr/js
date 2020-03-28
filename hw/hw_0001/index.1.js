let persons = [
  {firstName: "Volodymyr", lastName: "Kravchenko" , yearOfBirth: 1981},
  {firstName: "Elena", lastName: "Kravchenko" , yearOfBirth: 1988},
  {firstName: "Steshka", lastName: "Kravchenko", yearOfBirth: 2013},
  {firstName: "Emilie", lastName: "Kravchenko", yearOfBirth: 2015},
  {firstName: "Dmytro", lastName: "Nedava" , yearOfBirth: 2002},
  {firstName: "Lena", lastName: "Nedava" , yearOfBirth: 1974},
  {firstName: "Sergey", lastName: "Nedava" , yearOfBirth: 1974},
  {firstName: "Nastya", lastName: "Nedava" , yearOfBirth: 1996},
  {firstName: "Nikita", lastName: "Nedava" , yearOfBirth: 2013},
];

var date = new Date();
var currentYear = date.getFullYear();

console.log(`FULLNAME`.padEnd(25, " "), `AGE`.padStart(7, " "));

persons.forEach((person) => {
  console.log(`${person.firstName} ${person.lastName}`.padEnd(25, " "), `${currentYear - person.yearOfBirth} y.o.`.padStart(8, " "));
});

var totalAmountOfYears = persons.reduce((prev, person) => {
  return prev + currentYear - person.yearOfBirth;
}, 0);

console.log(`\nTotal amount of years:`, totalAmountOfYears.toString().padStart(10, " "));