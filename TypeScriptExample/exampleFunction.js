// create array of Person objects
var people = [
    { name: "John Lee", age: 30 },
    { name: "Marry Burner", age: 25 },
    { name: "Harry Kill", age: 35 },
];
// Function to filter people who are at least 30 years old
function filterAdult(persons) {
    return persons.filter(function (persons) { return persons.age >= 30; });
}
// Using the function and logging the result
var adults = filterAdult(people);
console.log(adults);
