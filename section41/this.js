// var person = {
//     firstName: "Jon",
//     sayHi: function(){
//         return "Hi " + this.firstName
//     },
//     determineContext: function(){
//         return this === person
//     },
//     dog: {
//         sayHello: function(){
//             return "Hello " + this.firstName;
//         },
//         determineContext: function() {
//             return this === person;
//         }
//     }
// }

// console.log(person.dog.determineContext.call(person))

// var colt = {
//     firstName: "Colt",
//     sayHi: function(){
//         return `Hi ${this.firstName}`;
//     },
//     addNumbers: function(a,b,c,d){
//         return `this.firstName just calculated ${a+b+c+d}`;
//     }
// }

// var elie = {
//     firstName: "Elie",
// }

// var elieCalc = colt.addNumbers.bind(elie,1,2,3,4)
// console.log(elieCalc())

// var elieCal2 = colt.addNumbers.bind(elie,1,2)
// console.log(elieCalc(3,4))

var colt = {
    firstName: "Colt",
    sayHi: function(){
        console.log(`Hi ${this.firstName}`);
    }
}