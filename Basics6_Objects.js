/*OBJECTS*/
/*Basics about objects*/

/*object is collection of properties and / or methods, we define properties by key : value*/
//declaring object
let person = {
  firstName: 'Tim',
  lastName: 'Doe',
  age: 24,
  fullName: function()
  {
    console.log(this.firstName + this.lastName)
  }
}

//Different ways of accessing properties inside object
console.log(person.fullName())
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

//Checking if property exists in the object
console.log('gender' in person)

//Printing all values inside javascript object (key represents properties inside object; firstName, lastName)
for (let key in person)
{
  console.log(person[key])
}


