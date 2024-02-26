const myNumbers =[1,2,3,4,5,6,7,8,9,10]
 //const newNums = myNumbers.map((nums) => nums +10)
  const newNums= myNumbers
        .map((num) => num *10)
        .map((num) => num + 1)
        .filter((num) => num >=40)
 //console.log(newNums);



 // reduce
 const myNums = [1,2,3]
//  const mytotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc +currval
//  },3)
 const mytotal= myNums.reduce((acc, curr) => acc+curr,0)
 console.log(mytotal);


