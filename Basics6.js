/*OBJECTS*/
/*object is collection of properties, we define properties by key : value*/
//declaring object
let person = {
  firstName: 'Tim',
  lastName: 'Doe'
}

//Different ways of accessing properties inside object
console.log(person.lastName)
console.log(person['lastName'])

//Changing the property of object
person.firstName = 'Tim Dane'
console.log(person.firstName)

//Creating / adding new property to object without adding it in the object itself
person.gender = 'male'
console.log(person)

//Deleting property from object
delete person.gender
console.log(person)

//Checking if property exists in the object and iterating through all the properties inside an object


