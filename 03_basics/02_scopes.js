let a=300
if(true){
    let a= 10
    const b = 20
    var c = 40
  //  console.log("Inner : ", a);
    
}
//console.log(a);
//console.log(b);
//console.log(c);

function one() {
    const username = "Deepali"

    function two() {
        const website="youtube"
        console.log(username);
        
        
    }
    //console.log(website);
    two()
    
    
}
//one()

if (true) {
    const username="Astha"
    if (username=="Astha") {
        const website= "Google"
        console.log(username + website);
        
        
    }
   // console.log(website);
    
    
}
//console.log(username);


// INTERESTING CONCEPT

console.log(addOne(6))
function addOne(num) {
    return num+1
    
}

console.log(addTwo(3))
const addTwo = function(num) {
    return num + 2
    
}

