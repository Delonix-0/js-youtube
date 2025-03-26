// object literals
const mySym=Symbol("key1")
const JsUser={
    name:"Deepali",
    [mySym]:"mykey1",
    age:21,
    location:"Kolkata",
    email:"Deepli@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
//console.log(JsUser.email);
//console.log(JsUser["email"])
//console.log(JsUser[mySym]);
//console.log(typeof(mySym));

//JsUser.email="Deeepali28@google.com"
//Object.freeze(JsUser)
//JsUser.email="Deep@gmail.com"
//console.log(JsUser);

JsUser.greeting = function() {
    

    console.log("Hello");
    
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function() {
    

    console.log(`Hello Js user, ${this.name}`);
    
}
console.log(JsUser.greetingTwo());
