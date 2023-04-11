/*Question no 1: Write a JavaScript program that accepts two numbers in two prompts and
displays the larger one in the console.*/


let num1 = +prompt("Enter a Number");
let num2 = +prompt("Enter 2nd Number");

if(num1 > num2){
    console.log(num1);
}
else{
    console.log(num2)
}
/*Question No 2: Write a JavaScript conditional statement to find the sign of a number. Display
an alert box with the specified sign.
Sample: 3
Output : The sign is +
Sample: -5
Output : The sign is -
*/

let Number1 = +prompt("Enter a Number")

if(Number1 > 0)
{
    alert("The Sign is +")

}
else{
    alert("The Sign is -")
}

/*Question no 3: Write a JavaScript program that accepts five numbers in five prompts and
displays the larger one in the console.*/


let a = +prompt("Enter any Number");
let b = +prompt("Enter any Number");
let c = +prompt("Enter any Number");
let d = +prompt("Enter any Number");
let e = +prompt("Enter any Number"); 

if (a>b && a>c && a>d && a>e)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>e)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>e)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>e)
{
    console.log(d);
}
else
{
    console.log(e);
}

/*Question No 4 : Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
will check if the current number is odd or even, and display a message to the
screen.
Sample Output :
"0 is even"
"1 is odd"
"2 is even"*/

for (let i = 1; i<=15; i++){
    if(i === 0){
        console.log(i +  " is even")
    }
    else if(i % 2 === 0 )
    console.log(i +  " is even")
    else{
        console.log(i + " is odd")
    }
}

/*Question no 5: Write a JavaScript program which computes the average marks of the
following students Then, this average is used to determine the corresponding
grade.
The grades are computed as follows :
Range Grade
<60    F
<70    D
<80    C
<90    B
<100   A
 */

let Subject1 = +prompt("Enter Subject Marks")
let Subject2 = +prompt("Enter Subject Marks")
let Subject3 = +prompt("Enter Subject Marks")
let Subject4 = +prompt("Enter Subject Marks")
let Subject5 = +prompt("Enter Subject Marks")

let avg =0

sum=Subject1+Subject2+Subject3+Subject4+Subject5

avg=sum/5
console.log('average=',avg)

if (avg < 60){
              console.log("Grade : F");      
              } 
            else if (avg < 70) {
                    console.log("Grade : D"); 
                      } 
            else if (avg < 80) 
                 {
                    console.log("Grade : C"); 
            } else if (avg < 90) {
                    console.log("Grade : B"); 
            } else if (avg < 100) {
                    console.log("Grade : A");
            }



// /* Question No 06: Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".
// */ 
for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}

/*Question no 07: Write a JavaScript program to construct the following pattern, using a nested
for loop.
*
* *
* * *
* * * *
* * * * * */ 
let n = 15;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);