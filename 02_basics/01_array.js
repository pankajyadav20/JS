const myarr =[0, 3,4, 5, 6, 8]
const myarr2=["sham","raj"]
const myarr3=new Array(2,4, 6, 7)
// console.log(myarr[1]);
// console.log(myarr2[1]);
// console.log(myarr3[2]);
/* Array Methods*/

// myarr.push(7)
// myarr.pop()
// myarr.unshift(9)=>add value in starting
// myarr.shift()=>remove element from end

// console.log(myarr.uncludes(8)); =>check value present or not in given array
// console.log(myarr.indexOf(4));=>give value of index given element

 //  slice and splice
//  console.log(myarr);
// const ree=myarr.slice(1,3);
// console.log(ree);
// console.log(myarr);
//  const ree1=myarr.splice(1,3);
//  console.log(myarr);
//  console.log(ree1);
 console.log(Array.isArray("Hitesh"));
 console.log(Array.from("Hitesh"));
 console.log(Array.from({name: "Hitesh"}));
//  let ram1 =300
//  let ram2 = 400
//  let ram3 = 500
//  console.log(Array.of(ram1, ram2, ram3));