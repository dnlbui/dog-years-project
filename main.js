//variable myAge assigned to my age
const myAge = 18;

//variable (that'll be reassigned) earlyYears and assign to value 2
let earlyYears = 2;

//use multiplication assignment operator by 10.5 and assign to earlyYears
earlyYears *= 10.5;

//variable (that'll be reassigned) laterYears and assign to myAge-2
let laterYears = myAge - 2;

//multiply laterYears by 4. This calculates the number of dog years accounted for by your later years
laterYears *= 4;

//TEST
//console.log(earlyYears);
//console.log(laterYears);

//initialize a result variable (myAgeInDogYears) assinged to the sum of earlyYears and laterYears 
const myAgeInDogYears = earlyYears + laterYears;

//created variable called myName and stores my name as a string while using .toLowerCase()
var myName = 'Daniel'.toLowerCase();

//created string displaying my name, human age, and dog age
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
