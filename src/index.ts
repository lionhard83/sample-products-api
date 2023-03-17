// import { User, users } from "./data";

// const findById = (id: number): User => {};

// const findBySex = (sex: "Male" | "Female"): User[] => {};

// const findByName = (name: string): User[] => {};

// :number
// :boolean
// :object
// :string

// const sum = (a: number, b: number) => {
//   return a + b + 10; // inferenza
// };

// const a = sum(3, 4);

// let b: number = 3;

// (() => console.log("ciao"))(); // clousure

// // 9 1 1 9
// // 81 1 1 81 -> 811181

// console.log(Number(true)); //

// const squareDigit = (num: number): number =>
//   Number(
//     String(num)
//       .split("")
//       .map(Number) // .map(num => Number(num))
//       .map((item) => item * item)
//       .join("")
//   );

// console.log(typeof Number);

// console.log(squareDigit(9119));

// const iter = (num: number) =>
//   Number(
//     String(num)
//       .split("")
//       .map(Number)
//       .reduce((acc, item) => acc * item, 1)
//   );

// export function persistence(num: number): number {
//   let count = 0;
//   if (String(num).length === 1) return 0;
//   while (true) {
//     num = iter(num);
//     count++;
//     if (String(num).length === 1) return count;
//   }
// }
// export function litres(time: number): number {
//   return Number((time / 2).toFixed(0));
// }

// console.log(persistence(39));

// const f = (y: any) => {
//   console.log(y);
//   return 3;
// };

// f(3);
// f("pippo");
// f(true);

// let x = 4;
// const y = 4;

// type Person = "pippo" | "caio" | "sempronio";

// let z1: Person = "pippo";
// let z2: Person = "caio";
// let z4: number[] = [3, 4];

// let z5: (string | number)[] = ["caio", 3];

// let z3 = ["pippo", "caio"];
// z3.push("callio");
// let z6: Person[] = ["pippo", "caio"];

// let z7 = [];

// type User = {
//   name: string;
//   surname?: string;
//   age?: number | string;
//   parent?: User;
//   employee?: boolean;
//   address?: string;
// };

// const arr: User[] = [
//   {
//     name: "carlo",
//     surname: "leonardi",
//     parent: {
//       name: "Mimmo",
//       surname: "Giovanni",
//     },
//   },
//   {
//     name: "Carlo",
//     address: "Via del monte",
//   },
// ];

// // arr.push(a);
// // arr.push(b);

// // arr.push();
