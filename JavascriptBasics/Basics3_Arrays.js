/*ARRAYS*/
/*Basics about arrays*/

//Assings array with single and multiple values
var marks = Array(6)
var marks = new Array(20,40,25,12,37,100)

//Accessing values inside array
var marks = [20,40,25,12,37,100]

//Making sub-array from array
subMarks = marks.slice(2,5)
console.log(subMarks)

//Printing the value that has index 2 in array
console.log(marks[2])

//Setting the 3rd value in array to 14
marks[3] = 14
console.log(marks) //output: [20,40,25,12,37,100]
console.log(marks.length) //output: 6

//Add / append new value to existing array at the end
marks.push(65)
console.log(marks)

//Add new value to existing array at the beginning / start
marks.unshift(12)
console.log(marks)

//Delete last element from array
marks.pop()
console.log(marks)

//Getting the index of specific value from array (example: value of 100)
console.log(marks.indexOf(100))

//Method that checks if the value we want is included in array
console.log(marks.includes(120))

//Printing the values of array and sum all the values printed
var sum = 0
for(let i = 0; i < marks.length; i++)
{
  console.log(marks[i])
  sum = sum + marks[i]
}
console.log(sum)

//Reduce function performs operation on all elements of array
//Create new array with even numbers of scores array
/*Value of sum should be entered last and the real logic should be before the sum value*/
/*Value of sum = 0*/
let total = marks.reduce((sum, mark) => sum + mark, 0)
console.log(total)
var scores = [12,13,14,16]
var evenScores = []
for (let i = 0; i < scores.length; i++)
{
  if (scores[i] % 2 == 0)
  {
    evenScores.push(scores[i])
  }
}
console.log(evenScores)

//Example 2
//Use Filter function if u only want to filter the values inside array
/*Filter method iterates through all elements inside array with specified condition (score % 2 == 0)
and pushes the values to new array*/
let newFilterEvenScores = scores.filter(score => score % 2 == 0)
console.log(newFilterEvenScores)

//Map function
/*Mapping is used to change existing value to new value*/
//Create new array with even number of scores, multiply each value with 3 and sum them
let mappedArray = newFilterEvenScores.map(score => score*3)
console.log(mappedArray)
let totalValue = mappedArray.reduce((sum, value) => sum + value, 0)
console.log(totalValue)

//Chaining the array functions
var scores1 = [12,13,14,16]
let sumValue = scores1.filter(score => score % 2 == 0).map(score => score * 3).reduce((sum, value) => sum + value, 0)
console.log(sumValue)


//String array and sorting it in alphabetical order
/*Sort method only sorts strings, not numbers*/
let fruits = ["banana", "mango", "strawberry", "apple"]
fruits.sort()
console.log(fruits)
console.log(fruits.reverse())

//Recursive sorting function that compares each element in array and pushes the smallest one to the beginning
var scores1 = [12,003,19,16,14]
//console.log(scores1.sort())
//scores1.sort(function(a,b)){
//return a-b
//}
//scores1.sort((a,b) => a - b)
console.log(scores1.sort((a,b) => a-b))
