/*Functions*/
/*Block of code that can be executed together by wrapping it in brackets*/
/*Declaring the function: keyword function, name of the function and parameters */
function add(a,b)
{
 return a+b
}

/*Calling the function; name of the function is saved to variable, values*/
let sum = add(2,3)
console.log(sum)

//Anonymous function -- function expressions, do not have names; example:
let sumOfIntegers = function(c,d)
{
  return c+d
}

//Minimizing the code above
let sumOfNumbers = (c,d) => c+d
console.log(sumOfNumbers(2,3))
