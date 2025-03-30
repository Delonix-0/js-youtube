const myObject={
    js : "javascript",
    cpp : "C++",
    py : "python"
}

for (const key in myObject) {
    console.log(`${key} is the shortcut for ${myObject[key]}`);
    
   
}

const coding=["java","cpp","ruby"]
//coding.forEach(function (value) {
    //console.log(value);
    
//})

//using arrow function
coding.forEach((value)=>{
    console.log(value);
    
})

//another way
coding.forEach( (item, index, arr) => {
    console.log(item,index,arr);
    

}

)