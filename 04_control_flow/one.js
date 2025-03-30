const emptyObj ={}

if(Object.keys(emptyObj).length===0){
    console.log("EMpty");
    
}

//Nullish Coalescing Operator (??) null :undefined
let val1;
//val1 = 5 ?? 10
val1 = null ?? 10 ?? 45
console.log(val1);

//Terniary operator
condition ? true : false
