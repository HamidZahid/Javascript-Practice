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
    return  `Hey Baby ${name} ${age} ${value} ${time} ${money} baby i am pro`;
};
console.log(Greet("Hamid Eventuilly", "Second Value" ,'78',"helloo","World"))
// Arrow Function ES6
var greet = (name , age,value ,time ,money) =>{
    return `Hello ${name} ${age} ${value} ${time} ${money} baby i am pro`;
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

let hamid = "Hamid Software company"
console.log(`Good To see you Sir ${hamid}! you are fireddd` );


var details ={
    name:"hamid",
    age: 56,
    edu: "adp"
}
var {name , age , edu} = details;
console.log(name);
console.log(age);
console.log(edu);

let arr = ["A", "V","f","Hamid"]

// let vi = arr[2];
// console.log(vi)

let [v1,v2,v3,v4] = arr;
console.log(v4)

// Promises

const myPromise  =  new Promise((Resolved , Rejected)=>{
    const a = 0;
    const b = 4
    const c = a + b;

    if ( c === 4) {
        Resolved("Yes it is true")
    }else{
        Rejected ("Bsdk Tu Pagal Hai ?")
    }
});

myPromise.then((m)=>{
    console.log(m);
}).catch((err)=>{
    console.log(err);
})



// rest and spread operators

const ji =[0,1,2,3,4,5];
const jo = ["a","c","d",...ji,6,7,8,9,10];
console.log(jo)


const sum = (...numbers)=>{
    let total = 0;
    numbers.forEach((n)=>{
        total += n;
    });
    console.log(total);
};

sum(4,2,5,5,7,6,7,6,6,6,6,6,6,6,6)

// Classes

class Hamid{
    constructor(uname , uage){
        this.name= uname;
        this.age = uage ;
    }
    details(){
        console.log(`The age of ${this.name} is ${this.age}`);
    }
}

const h = new Hamid("Hamid" , 21);
h.details();