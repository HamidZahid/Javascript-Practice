// let And Const Variables
// console.log(name);
// var name = "Hamid Zahid"
// console.log(name);


// const fsfname = "Thara Nhai Op"
// console.log(fsfname);

// let fname = "Guru Bhai Sabbbb"
// console.log(fname);
// fname ="heloo bhai"
// console.log(fname);

// simple Function ES5
function Greet(name, age,value ,time ,money){
    return "Hey Baby " + name  + " " + age + " " + value + " " + time + " " +money;
};
console.log(Greet("Hamid Eventuilly", "Second Value" ,'78',"helloo","World"))
// Arrow Function ES6
var greet = (name , age,value ,time ,money) =>{
    return "Hello " + name + " " + age + " " + value + " " + time + " " +money;
};

console.log(greet("Hamid Eventuilly", "Second Value" ,'78',"helloo","World"))

let Sqr = (num) =>{
 return num*num;
};
console.log(Sqr(10))

// This Keyword Use 

const Person = {
    test(){
        setTimeout(() => {
            console.log(this)
        }, 3000);
    }
}
Person.test()

// Template Literals 

