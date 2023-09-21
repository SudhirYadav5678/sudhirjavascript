// let a = 2
// const b = 3
// var c = 4
// if (true) {
//     let a = 2
//     const b = 3
//     var c = 4// var have scope outside of if function.
// }
// console.log(a);
// console.log(b);
//console.log(c);//it going to print.

//console.log(addone(5)); //in this function decliraction function is acessible in before decleration.
function addone(num){
    return num+1
}
//addone(5)
//console.log(addone(5));
function addtwo(num){
    return num+2
}
//addtwo(5)

console.log(addthree(5));
const addthree = function(num){ // in this decleration function is not declear before decleration.
    return num +3
}
//console.log(addone(5));