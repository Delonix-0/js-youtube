const tinderUser ={}

tinderUser.id="123"
tinderUser.name="Deep"
tinderUser.isLoggedIn=false

console.log(tinderUser);

const obj1={1: "a", 2: "b"}
const obj2={3: "a", 4: "b"}
const obj4={5: "a", 6: "b"}
//const obj3 = Object.assign({}, obj1,obj2,obj4)


//console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



