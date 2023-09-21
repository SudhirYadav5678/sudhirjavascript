// "this keyborad" 
const obj1 = {
    username : "Sudhir Yadav",
    Prize : 999,
    welcome : function(){
        console.log(`${this.username} welcome to the website`);//"this" is going to print present context in object.
        console.log(this);
    }
}
// obj1.welcome()
// obj1.username = "sudhir"
// obj1.welcome()
//console.log(this);


// function name(){
//     let username = "Sudhir"
//     console.log(this.username);// "this" is not working in function.
// }
// name()

// const name = function(){
//     let username = "Sudhir"
//     console.log(this.username);// "this" is not working in function.
// }
// name()
// const name = () =>{
//     let username = "Sudhir"
//     console.log(this.username);// "this" is not working in function.  => this is arrow function.
// }
// name()

// arrow function
// const add = (num1,num2) => {
//     return num1 +num2
// }
// console.log(add(3,4));
// const add = (num1,num2) => num1 +num2
// console.log(add(3,4))

const add = (num1,num2) => ({usernmae : "sudhir"})// for arrow function () is used or {} with return.
//console.log(add(3,4))