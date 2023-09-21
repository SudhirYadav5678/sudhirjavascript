let arr = [1,3,4,5,6,7,8,4]
let arr1 = [2,4,6,7,8,9,0]
//arr.push(arr1)//in this scenerio arr1 consider as single element in arr.
//console.log(arr);
//console.log(arr[8]);
//console.log(arr[8][2]);//print element in nested array.

let arr2 = arr.concat(arr1)//merge two arrays in a new array.
//console.log(arr2);

let arr3 = [...arr, ...arr1]//this is sprade method in which all element broke and combined into new array.
//console.log(arr3);

let arr4 = [1,3,4,3,2,[3,4,5,5],[35,43,43,55,4,3,[4,5,6,7,8,8,9]]]
let arr5 = arr4.flat(Infinity)//in this function all nested arrays are going to combined into a singlr array.
//console.log(arr5);

// console.log(Array.isArray("sudhir Yadav"));//Question about is this array exist or not.
// console.log(Array.from("1234567890"));//this is going to create an array with given values.
// console.log(Array.from("Sudhir "));
// console.log(Array.from(123456));//empty array.
// console.log(Array.from({name : "suhdir"}));//empty array.

let s1 =100
let s2 =200
let s3 = 300
console.log(Array.of(s1,s2,s3));//of function is going to form an array.