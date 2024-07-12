//Task-1: Fortune Teller Function

function tellFortune(children, partner, location, job) {
    console.log(`You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`);
}


tellFortune(2, "Alice", "New York", "Software Developer");
tellFortune(3, "Bob", "London", "Graphic Designer");
tellFortune(1, "Charlie", "Paris", "Chef");


//Task-2: Pet Age Calculator

function calculatePetAge(petAge, conversionRate = 7) {
    const petYears = petAge * conversionRate;
    console.log(`Your pet is ${petYears} years old in pet years!`);
}


calculatePetAge(2); 
calculatePetAge(3, 5); 
calculatePetAge(4, 10); 

//Task-3: Rectangle Properties

function calcPerimeter(length, width) {
    const perimeter = 2 * (length + width);
    console.log(`The perimeter is ${perimeter}`);
}

function calcArea(length, width) {
    const area = length * width;
    console.log(`The area is ${area}`);
}


calcPerimeter(5, 10);
calcPerimeter(7, 3);
calcArea(5, 10);
calcArea(7, 3);

//Task-4: Coffee Consumption Estimator

function calculateCoffeeSupply(age, cupsPerDay) {
    const maxAge = 100;
    const yearsLeft = maxAge - age;
    const totalCups = Math.round(yearsLeft * cupsPerDay * 365);
    console.log(`You will need ${totalCups} cups of coffee to keep you awake until the age of ${maxAge}.`);
}


calculateCoffeeSupply(30, 3);
calculateCoffeeSupply(25, 2.5);
calculateCoffeeSupply(40, 4);

//Task-5: Distance Converter

function metersToFeet(meters) {
    const feet = meters * 3.281;
    console.log(`${meters} meters is equal to ${feet.toFixed(2)} feet.`);
}

function feetToMeters(feet) {
    const meters = feet * 0.3048;
    console.log(`${feet} feet is equal to ${meters.toFixed(2)} meters.`);
}


metersToFeet(5);
metersToFeet(10);
feetToMeters(16.4);
feetToMeters(32.8);



