/*INHERITANCE*/
/*Basics about inheritances*/


//Inheritance is the main pillar in object oriented programming (OOP)
//One class can inherit / acquire the properties and / or methods of another class
//The class which inherits the properties of other is known as subclass (derived class, child class)
//The class whose properties are inherited is known as superclass or parent class
//Example:
const Person = require("./Basics7_Classes");
class Pet extends Person
{
  get location()
  {
    return "Mr.Pet"
  }
  constructor(firstName,lastName)
  {
    //Call parent class constructor
    super(firstName,lastName)
  }
}

let pet = new Pet("Me", "do")
pet.fullName()
console.log(pet.location)

//Accessing the property of any class, new object of the class needs to be created
//It needs to be created outside of class
//Example:
let person = new Person("Chris","Jones")
let personConstructor = new Person("Tim","Doe")
console.log(person.age)
console.log(person.location)
console.log(person.fullName())
console.log(personConstructor.fullName())


