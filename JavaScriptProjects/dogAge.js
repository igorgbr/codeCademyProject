const myAge = 31; // Human age
let earlyYears = 2; // Dog age
earlyYears *= 10.5;
let laterYears = myAge - 2; //subtract first two years
laterYears *= 4; //dog years accounted for by your later years

const myAgeInDogYears = earlyYears + laterYears;
const name = 'Igor Giamoniano'.toLowerCase();//return name in lowercase
console.log(`My name is ${name}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
