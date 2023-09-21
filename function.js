function name(){
    console.log("sudhir Yadav");
    console.log("Sudir");
}
//console.log(name());
//name();//this called function.

// function add(number1,number2){
//     console.log(number1+number2);
// }
// const result1 = add(2,3)
// console.log(result);// undefind
function add(number1,number2){
    let result = number1+number2
    return result
}
// add(4,5)
// const result1 = add(2,3)
// console.log(result1);

function loggedIn(username){
    if (username === undefined) {
        console.log("Please enter your username");
    }
    // if (!username) {
    //     console.log("Please enter your username");
    // }
    else{
    return `${username} Just Logged In into System`}
}
//loggedIn("")// Not gonig to Print anythings.
// let call = loggedIn("Sudhir")
// console.log(call);
// let call = loggedIn()
// console.log(call);

// when eCommerce web cart system where item are added then ...(reset) or loop used.
function adds(...num){// reset operater it is going to form an array of all input which pass in function call.
    return num
}
//console.log(adds(200,300,400));

//object in function 
const user = {
    username : "Sudhir Yadav",
    class : "xl",
}
function using_object(object){
    console.log(`Username is ${object.username} and class is ${object.class}`);
}
//using_object(user)
// using_object({
//     username : "CVBG",
//     class : "ka"
// })

const myarray = [1,3,5,6,5]
function arrays(array){
    return array[2]
}
console.log(arrays(myarray));