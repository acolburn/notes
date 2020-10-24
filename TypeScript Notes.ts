//https://scrimba.com/learn/intrototypescript/typescript-introduction-cEQBWH3

//Variables
//undefined variables are of type any
var example1: boolean = true; //explicit typing
var example2 = 35; //implicit typing
var example3: string;
example3 = 'hello';

let example4: boolean | number; //two types assignable to example4
example4 = true;
example4 = 33;

//Collections
let example5: number[] = [1, 2, 3];
let example6 = [1, 2, 3]; //implicit typing
//There's also the generic array type
let list: Array<number> = [1, 2, 3];

//const for constants
const numLivesForCat = 9;
//numLivesForCat=1; ... error

//Enums
enum CompassDirection { north, east, south, west };
var direction = CompassDirection.east;

//Checking types
class AClass {
    name: string;
    constructor() {
        this.name = 'al';
    }
};
let anObject = new AClass();
if (anObject instanceof AClass) { console.log('ok'); } else { console.log('not there yet'); } //[LOG]: 'ok'

//Type Conversion
var variableThatIsNotAString: number = 1;
var i: string = String(variableThatIsNotAString);
var i: string = variableThatIsNotAString.toString();
console.log(typeof (i)); //string


//Arrays
const ex1: string[] = ['hello']; //const arrays must be initialized
let ex2: number[];
ex2 = [1, 2, 3];
const ex3: (number | boolean)[] = [1, 2, true];
let ex4: string[][]; //2D array

//Tuples 
const exTuple: [string, number] = ['alan', 59];


//Functions
//These are all the same:
let f1 = function (i: number): number {
    return i * i;
}
let f2 = function (i: number) {
    return i * i;
}
let f3 = (i: number): number => { return i * i; }
let f4 = (i: number) => { return i * i; }
let f5 = (i: number) => i * i;


//Return type can also be void if nothing's returned
function sayHello(): void {
    alert("hello");
}


//Classes
//Class members public by default
//access modifiers (public, private, readonly, protected)

// A class is a special type of JavaScript object which
// is always created via a constructor. These classes
// act a lot like objects, and have an inheritance structure
// similar to languages such as Java/C#/Swift.

class Vendor {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet() {
        return "Hello, welcome to " + this.name;
    }
}

// An instance can be created via the new keyword, and
// you can call methods and access properties from the
// object.

const shop = new Vendor("Ye Olde Shop");
console.log(shop.greet());

// You can subclass an object. Here's a food cart which
// has a variety as well as a name:

class FoodTruck extends Vendor {
    cuisine: string;

    constructor(name: string, cuisine: string) {
        super(name);
        this.cuisine = cuisine;
    }

    greet() {
        return "Hi, welcome to food truck " + this.name + ". We serve " + this.cuisine + " food.";
    }
}

// Correctly passing in two arguments will let you create a
// new instance of the FoodTruck:

const truck = new FoodTruck("Dave's Doritos", "junk");
console.log(truck.greet());

//Interfaces
interface IPerson {
    firstName: string;
    lastName: string;
}
var me: IPerson;
me.firstName = 'Alan';
me.lastName = 'Colburn';
//can implement multiple interfaces
//inherit all the properties; I don't think they're all req'd though
//let manBearPig: IBear & IMan & IPig;


// Getting Started www.youtube.com / CodingTutorials360
// youtu.be / _QAbWfcCaKc ? t = 1783(TSLint)

// tsc fileName.ts
// @ts-check




