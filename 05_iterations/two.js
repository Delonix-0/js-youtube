// for of
const arr=[1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
    
    
}

const greetings="Heelooooo"
for (const greet of greetings) {
    //console.log(`Each character is : ${greet}`);
    
    
}

//Maps    //prints unique data
const map=new Map()
map.set("IN","INDIA")
map.set("FR","FRANCE")
//console.log(map);
for (const [key,value] of map) {
    console.log(key, ":", value);
    
    
}

//maps are iterables but objects are not iterables
const myObject={
    'game 1': 'NFS',
    'game 2':'Spiderman'

}
for (const [key,value] of myObject) {
    console.log(key, ":", value);
    
}
