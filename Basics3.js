//Assings array with single and multiple values
var marks = Array(6)
var marks = new Array(20,40,25,12,37,100)

//Accessing values inside array
var marks = [20,40,25,12,37,100]
console.log(marks[2])
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
