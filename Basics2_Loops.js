/*LOOPS*/
/*Basics about loops (if, while, do while, for)*/

/*Declaring constant variable with the name flag and value true*/
const flag = true

/*IF STATEMENT*/
/*If condition matches / is true; first block of code gets executed, otherwise second block of code will be executed*/
/*By typing ! before condition it reverses it and second block of code is executed*/
if (!flag)
{
console.log("Condition satisfied")  
}
else
{
console.log(flag)
console.log("Condition not satisfied")  
}

/*WHILE LOOP*/
/*While loop must contain code that manipulates variable given in the condition*/
/*If condition matches / is true; block of code gets executed n-times, until condition becomes false*/
/*We use while loop if we want to repeat loop based upon some condition / evaluation that if it becomes true or false we use*/
let i = 0
while (i>10)
{
i++ //same as i = i + 1
console.log(i)
}

let required = true
while (required) // while (condition)
{
console.log(required)
required = false
}

/*DO WHILE LOOP*/
/*Do while loops is used when we want to execute code once and then monitor the status*/
/*; needs to be after while*/
do
{
i++
} while (i>10);
console.log(i)

/*FOR LOOP*/
/*For loop is used when we know how many times we need to run the loop */
/*3 conditions are given in for loop; declaring variable with value, condition, incrementation*/
for (let k = 0; k <= 10; k++)
{
console.log(k)
}

//Get the numbers common to value of multiple of 2 and / or 5
let n = 0
for (let k = 1; k <= 100; k++)
{
    if (k%2 == 0 && k%5 == 0)
    {
    n++
    console.log(k)
    if (n == 3)
    break
    }
}
