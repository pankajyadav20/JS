const user={
    name: "Ankush",
    age:19,
    location:"kanpur Nagar"
}
// console.log(user.location);
// console.log(user["location"]);
//user.email = "pankaj@edu"
//Object.freeze(user)
//user.email = "pankaj@gmail"
//console.log(user);
user.greeting = function(){
    console.log("hello by boy");
user.greetingTwo = function(){
        console.log('hello by boy, ${this. name}');
    }
}
console.log(user.greeting());
console.log(user.greetingtwo());
/*......************....*/

