const arr1= ["A", "B", "C"]
const arr2= ["D", "E", "F"]

//const arr3=arr1.concat(arr2)

//console.log(arr3);


const arr3=[...arr1,...arr2]
//console.log(arr3);

const arr4=[1,2,3,[4,5,[6,7]]]
const arr5=arr4.flat(Infinity)
console.log(arr5);
console.log(Array.isArray("Deepali"));
console.log(Array.from("Deepali"));

let A=100
let B=200
let C=300
console.log(Array.of(A,B,C));

