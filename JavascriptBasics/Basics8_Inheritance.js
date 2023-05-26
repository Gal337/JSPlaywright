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

