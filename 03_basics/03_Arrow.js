const user={
    username : "Astha",
    price : 200,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        

        
    }

}
//user.welcomeMessage()
//user.username="sam"
//user.welcomeMessage()
//console.log(this);

function chai() {
    let username="harshit"
    console.log(this.username);  //cant use this in function
}
//chai()

const chai1= function () {
    let username="harshit"
    console.log(this.username);
}
//chai1()

const chai2= () => {
    let username="harshit"
    console.log(this);
}
//chai2()

//BASIC ARROW FUNCTION
 const addTwo = (num1, num2) =>{
    return num1 + num2

 }
 //console.log(addTwo(2,4));
 
 //IMPLICIT RETURN
 const addThree = (num1, num2) => num1 + num2

 
 //console.log(addThree(2,4))
 const addFour = (num1, num2) => (num1 + num2)    //no need of return in () bracket but in {}

 
 console.log(addFour(7,4))
