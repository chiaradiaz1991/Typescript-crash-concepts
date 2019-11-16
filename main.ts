export { }

let message = 'Hello world'

console.log(message);

//declare and initialize the variables

let x = 10;
const y = 20;

x = 40;

//variable types

let isBegginer: boolean = true;
let total: number;
let name: string = 'Chiara';
let sentence: string = `My name is ${name}`;

console.log(sentence)

//subtypes
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Chiara', 28];


enum Color { red = 5, green, blue };

let c: Color = Color.green;

console.log(c)

let anyType: any;

anyType = 20;

function add(num1: number, num2?: number): number {
    if (num2) {
        return num1 + num2;
    } else {
        return num1;
    }
}

console.log(add(5, 10));
console.log(add(2))

interface Person {
    firstName: string,
    lastName?: string; //optional property
}

function fullName(person: Person) {
// function fullName(person: { firstName: string, lastName: string }) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: "chiara",
    lastName: "diaz"
}

fullName(p)

class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Hello ${this.employeeName}`);
    }
}

let employee1 = new Employee('Julieta'); //new instance of employee
console.log(employee1.employeeName);
employee1.greet();


class Manager extends Employee {
    constructor(managerName: string) {
        super (managerName)
    }

    delegateWork() {
        console.log(`Manager delegating tasks`)
    }
}

let m1= new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);