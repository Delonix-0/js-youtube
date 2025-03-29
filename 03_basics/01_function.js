function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(5,8)
console.log(result);

function loginUserMessage(username){
    if(username == undefined){
        console.log("Enter user");
        
        return
    }
    return `${username} just logged in` 
}

console.log(loginUserMessage());

//to paas default value
function loginUserMessageDefault(username="Deepali"){
    if(username == undefined){
        console.log("Enter user");
        
        return
    }
    return `${username} just logged in` 
}

console.log(loginUserMessageDefault());

function calculateCartPrice(...num1){
    return num1

}
console.log(calculateCartPrice(200, 400, 600));

function calculateCartPrice2(val1, val2, ...num1){
    return num1

}
console.log(calculateCartPrice2(200, 400, 600, 450));

const user={
    username:"Deepali",
    price : "400"

}

 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
 }

 //handleObject(user)

 handleObject({
    username : "sam",
    price : "200"

 })

 //how to pass array

 const newArray=[100, 200, 300, 400]
 function getSecondElement(getArray) {
    return getArray[2]
    
 }

 //console.log(getSecondElement(newArray));
 console.log(getSecondElement([123,456,324,345]));
 


