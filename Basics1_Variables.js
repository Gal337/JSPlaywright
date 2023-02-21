/*VARIABLE*/
/*Basics about variables and printing them to console*/

/*Printing to console*/
console.log("Hello, this are the JS basics")


/*Declaring variables with var, let or const
Redeclaring variable with let keyword is not possible, but we can redeclare it with keyword var
const keyword should be used for variables that are not changing their values / stay always the same*/
let a = 4
console.log(a)
console.log(typeof(a))

let b = 234.6
console.log(typeof(b))

var c = "Javascript"
console.log(typeof(c))

let required = true
console.log(typeof(required))
/*Reverse operator - only for boolean type*/
console.log(!required)

/*let c = a + b (it did not work because redeclaring same variable is not possible with let keyword)
if we type:
c = a + b 
will also work, because we did not use keyword let, which was previously used*/
var c = a + b
console.log(c)

