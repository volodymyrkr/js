let persons = [
    {name: "Volodymyr", surname: "Kravchenko" , yearsOfBirth: 1981},
    {name: "Elena", surname: "Kravchenko" , yearsOfBirth: 1988},
    {name: "Steshka",surname:"Kravchenko", yearsOfBirth: 2013},
    {name: "Emilie",surname:"Kravchenko", yearsOfBirth: 2015},
    {name: "Dmytro", surname:"Nedava" , yearsOfBirth: 2002},
    {name: "Lena", surname:"Nedava" ,yearsOfBirth: 1974},
    {name: "Sergey",surname:"Nedava" ,yearsOfBirth: 1974},
    {name: "Nastya",surname:"Nedava" ,yearsOfBirth: 1996},
    {name: "Nikita", surname:"Nedava" , yearsOfBirth: 2013},
];

var date = new Date();
var currentYear = date.getFullYear();

console.log("My relatives:");

persons.forEach((person) => {
    console.log("-",person.name, person.surname,currentYear - person.yearsOfBirth,);
});

var totalAmountOfYears = persons.reduce((prev, person) => {
    return prev + currentYear - person.yearsOfBirth;
}, 0);

console.log("Total amount of years: ", totalAmountOfYears);