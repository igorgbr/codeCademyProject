const kelvin = 0; //constant in kelvin
const celsius = kelvin - 273; //constant in celcius
let fahrenheit = celsius * (9/5) + 32; // variable in fahrenheit
//Bonus
const newton = Math.floor(celsius * (33/100));

fahrenheit = Math.floor(fahrenheit); //floor result
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit
and ${newton} degrees Newton.`);
