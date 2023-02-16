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
let i = 0
while (i>10)
{
i++ //same as i = i + 1
console.log(i)
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
