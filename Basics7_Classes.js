/*CLASSES*/
/*Basics about classes*/

//Declaring class; keyword class, name of the class
//Exporting class
module.exports = class Person
{
  age = 25
  //location Canada, get method is also treated as property
  get location ()
  {
    return "Canada"
  }
  //constructor is method which executes by default when object of the class is created
  constructor(firstName, lastName)
  {
    //instance variables (inside constructor)
    //this.firstName belongs to class and not to constructor
    this.firstName = firstName
    this.lastName = lastName
  }

  fullName()
  {
    console.log(this.firstName + this.lastName)
  }


  
}

//Accessing the property of any class, new object of the class needs to be created
//It needs to be created outside of class
//Example:
//let person = new Person("Chris","Jones")
//let personConstructor = new Person("Tim","Doe")
//console.log(person.age)
//console.log(person.location)
//console.log(person.fullName())
//console.log(personConstructor.fullName())


