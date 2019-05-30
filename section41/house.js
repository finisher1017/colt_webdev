// Create a constructor function for a vehicle with make model and year property
// Each object created by the constructor function should also have a property call "isRunning" equal to false
// Every object created by the contructor function should have a function called "turnOn" that changes the value of "isRunning" to true
// Every object created by the contructor function should have a function called "turnOff" that changes the value of "isRunning" to false
// Every object created from the constructor function should have a function challed Honk that logs "Beep" only if "isRunning" equals true

function Vehicle(make, model, year) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.isRunning = false;
    // this.turnOn = function(){
    //     this.isRunning = true;
    // },
    // this.turnOff = function(){
    //     isRunning = false;
    // },
    // this.honk = function(){
    //     if (this.isRunning === true) {
    //         console.log("beep");
    //     } else {
    //         console.log("car is off");
    //     }
    // }
}

Vehicle.prototype.turnOn = function() {
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
    this.isRunning = false;
}

Vehicle.prototype.honk = function() {
    if(this.isRunning) {
        return "beep!";
    } else {
        return "car is off";
    }
}

var car = new Vehicle("Hodna", "Civic", 2016);
// car.turnOn();
console.log(car.isRunning)
console.log(car.honk())




// function House(bedrooms, bathrooms, numSqft){
//     this.bedrooms = bedrooms;
//     this.bathrooms = bathrooms;
//     this.numSqft = numSqft;
// }

// var firstHouse = new House(2,2,1000)
// console.log(firstHouse)

// function Dog(name, age){
//     this.name = name,
//     this.age = age,
//     this.bark = function(){
//         console.log(`${name} just barked.`);
//     }
// }

// var dogCall = new Dog("Lotto", 7)
// console.log(dogCall.bark());

// function Fight(fighter1, fighter2, numRounds){
//     this.fighter1 = fighter1;
//     this.fighter2 = fighter2;
//     this.numRounds = numRounds;
//     this.bill = function(){
//         console.log(`${fighter1} vs. ${fighter2} is for ${numRounds}`);
//     }
// }

// var pac_marq = new Fight("Pacquiao", "Marquez", 12);
// console.log(pac_marq.bill());

// function Car(make, model, year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     // we can also set properties on the keyword this
//     // that are preset values
//     this.numWheels = 4
// }

// function Motorcycle(make, model, year){
//     // using call
//     Car.apply(this, [make, model, year])
//     this.numWheels = 2;
// }

// var new_bike = new Motorcycle('Kawasaki', 'Ninja', 2019);
// console.log(new_bike)