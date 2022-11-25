// console.log(document.querySelectorAll('input'))

// Defining type [TYPE CHECK] 
// const circ = (diameter: number) => diameter * Math.PI

//Arrays
// let names = ['name 1', 'name 2', 'name 3'];
//we can only push type String now in this array

//Mixed Arrays
// let Mixed = ['name 1', 2, true];
//we can only push type String, number and boolean now in this array

//same concept for Objects...

//Explicit declaration....
// let variableString : string;
// let variableAge : number;
// let variableBoolean : boolean;

//Explicit declaration for arrays
// let stringArray : string[];

//Union Types
// let mixedVariable : (string | number | boolean); 

//Union Types for arrays
// let mixedVariable : (string | number | boolean)[]; 

//Union Types for Objects
// let objectVariable: {
//     name: string,
//     age: number,
//     whatever: boolean,
// }

//Dynamic types
// let variableAny : any;

//Function TS
// let myFucntion : Function;

// const add = (a: number, b: number) => {
// }

//optional argument/parameter
// const add = (a: number, b?: number) => {
// }

//infering the return type of a function
// const add = (a: number, b?: number): number => {
    // return a + b
// }
//will return of type number

//TYPE ALIASES

// type StringorNum = string | number
// const myFucntion = (uid: StringorNum) => {}

// type objAlias = { name: string, uid: StringorNum};
// const greet = (user : objAlias) => {} 

//FUNCTION SIGNATURES
///1
// let myFucntion : (a: string, b: string) => void;
// myFunction = (name: string , whatever: string) => {}

//2
// let myFucntion : (a: string, b: string, c: string) => number;
// myFunction = (name , whatever , blabla) => {}

//3
// let objectDetails: (obj: {name : string, age: number}) => void;
// objectDetails = (myObject: {name, age}) => {};

//classes example
// class Invoice {
//     client: string;
//     details: string;
//     amount: number;

//     constructor(c: string, d: string, a: number){
//       this.client = c;
//       this.details = d;
//       this.amount = a;
//     }

//     format() {
//       return `${this.client} owes £${this.amount} for ${this.details}`;
//     }
//   }

//   const invOne = new Invoice('mario', 'work on the mario website', 250);
//   const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

//   let invoices: Invoice[] = [];
//   invoices.push(invOne)
//   invoices.push(invTwo);
//   // invoices.push({ name: 'shaun' }); 
//   console.log(invoices);

//class exampple with public private and radonly modifieres
// class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;

//     constructor(
//       readonly client: string, 
//       private details: string, 
//       public amount: number,
//     ){}

//     format() {
//       return `${this.client} owes £${this.amount} for ${this.details}`;
//     }
//   }

//   const invOne = new Invoice('mario', 'work on the mario website', 250);
//   const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

//   let invoices: Invoice[] = [];
//   invoices.push(invOne)
//   invoices.push(invTwo);

//   invoices.forEach(inv => {
//     console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
//   })
