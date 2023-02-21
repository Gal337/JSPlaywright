/*Strings and methods in Javascript*/

//Getting length of string
let day = 'tuesday '
console.log(day.length)
let subDay = day.slice(0,4)
console.log(subDay)
console.log(day[1])

//Splitting the string in 2 strings; trimming the white spaces with .trim; converting number to string and string to number
let splitDay = day.split("s")
console.log(splitDay[1].trim().length)

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
diff.toString()

//Concatinate 2 strings; searching the index of string
let newQuote = day + "is Funday day"
console.log(newQuote)
let val = newQuote.indexOf("day",5)
console.log(val)

//Program to see number of occurences of any word
let count = 0
let value = newQuote.indexOf("day")
while (value !== -1)
{
  count ++
  value = newQuote.indexOf("day", value+1)
}
console.log(count)


