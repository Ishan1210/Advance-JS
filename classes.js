// class ClassName{
//     constructor(name, description) {    
//         this.name = name;
//         this.description = description;
//     }
// }
// let obj=new ClassName("IT-4C", "This class is cool.");
// console.log(obj.name);
// console.log(obj.description);
// this keyword refers to the object it belongs to.

// class Dog{
//     constructor(name,weight,colour, breed) {
//         this.name = name;
//         this.breed = breed;
//         this.weight = weight;
//         this.colour = colour;
//     }}
// let dog1=new Dog("Rex", 20, "brown", "bulldog");
// console.log(dog1.name);
// console.log(dog1.weight); 
// console.log(dog1.colour);
// console.log(dog1.breed);

//CLASSES:
//There can only be 1 constructor in a class.
//It is convention to start class name with a capital letter

// class Person{
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let person1=new Person("Ishan", "Grover");
// console.log("Hi",person1.firstname);

// METHODS:
// Methods are functions that belong to an object.

// class Person{
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hello", this.firstname, this.lastname);
//     }
//     compliment(name,object){
//         return "That's a wonderful " + object + " " + name + "!";
//     }
// }
// let person1=new Person("Ishan", "Grover");
// let compliment=person1.compliment("Ishan", "car");
// console.log(compliment);
// person1.greet();


// class Person{
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
// }
// let person1=new Person("Ishan", "Grover");
// console.log(person1.firstname); 

// class Person{
//     constructor(firstname, lastname) {
//         if(firstname.startsWith("I")){
//             this.firstname = firstname;
//         }
//         else{
//             this.#firstname="Mr. "+firstname;
//         }
        
//         this.lastname = lastname;
//     }
// }
// let person1=new Person("Ishan", "Grover");
// console.log(person1.firstname);

// class Person{
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname() {
//         return this.#firstname;
//     }
//     set firstname(value) {
//         this.#firstname = firstname;
//     }
//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(value) {
//         this.#lastname = lastname;
//     }
// }
// let person1=new Person("Ishan", "Grover");
// console.log(person1.firstname);

// class vehicle{
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
    
//     }

// class Motorcycle extends vehicle{
//     constructor(make, model, year, type) {
//         super(make, model, year);
//         this.type = type;
//     }
//     doWheelie() {
//         console.log("Doing a wheelie!");
//     }
// }
// let motorcycle1 = new Motorcycle("Yamaha", "YZF-R3", 2020, "Sport");
// console.log(motorcycle1.make); 
// motorcycle1.doWheelie(); 

//We cannot access private members of a parent class in a child class.

// personalbar.prototype.intoduce= function(){
//     console.log("Hello, my name is " + this.firstname + " " + this.lastname + ".");
// }
//  let person1=new Person("Ishan", "Grover");
//  person1.intoduce();

//PROTOTYPES

// class Person{
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     } }
// Person.prototype.intoduce= function(){
//     console.log("Hello, my name is " + this.firstname + " " + this.lastname + ".");
// };
// let person1=new Person("Ishan", "Grover");
// person1.intoduce();
// Person.prototype.favouriteColor="blue";
// console.log(person1.favouriteColor);




