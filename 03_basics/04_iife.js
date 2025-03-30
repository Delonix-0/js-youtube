(function chai(){
    // named IIFE
    console.log(`DB connected`);
    
})();

//to stop pollution from variables and declarartions in globaal scope

( (name) => {
    //unnamed IIFE
    console.log(`DB connected 2 ${name}`);
    
}

)("Deep");