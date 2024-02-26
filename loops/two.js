// for of
const arr=[2,4,5,7,9]
for (const num of arr) {
   //console.log(num); 
}
const str="hi ram"
for (const greet of str) {
    //console.log(greet);
    
}



//// maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United america")
//console.log(map);
for (const [key, value] of map) {
    //console.log(key, ':-', value);
    
}




// for in for object

const myObject ={
    js: 'javascript',
    cpp: 'c++',
    rb:"ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    //console.log(`${key} fullname is ${myObject[key]}`);
    
    }


    // for in loop in array
    const prolang=['js','c++','py','java']
    for (const key in prolang) {
       // console.log(key);
        //console.log(prolang[key]);
        
    }


    // for each loop
    const myNums =[1,2,3,4,5,6,7,8,9,10]
    const newNums =[]
    myNums.forEach( (num) => {
        if(num > 4){
            newNums.push(num)
        }
    })
    console.log(newNums);