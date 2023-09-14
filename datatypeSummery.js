// Primitive call by value.
// 7 type Strings,Number,Boolen,undefined,null,symbol,bigInt.

//Non Primitive call by reference.
// array,object,functions.

// const id = Symbol('123')
// const anotherid = Symbol('123')
// console.log(id==anotherid)
// console.log(id===anotherid)
// const bignumber = 23456789n
// console.log(bignumber);

const arr = ["sudhir","yadav","xman"];//array
 let myobj = {
    name:"sudhir",
    age:22,
    class: 144
 }//object
 const myfunction = function(){
    console.log("Sudhir");
 }