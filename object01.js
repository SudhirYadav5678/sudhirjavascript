const user = new Object()
const user1 = {
    1 : "sudhir ",
    2 : "Kumar"
} // both objectsame.
// console.log(user);
// console.log(user1);
user.id = "1234dfgh"
user.name = "sudhir yadav"
user.email ="sudhirshj@gmailcom"
//console.log(user);
const user2 = {
    name : {
        user_name :"Suhir ",
        fullName : "sudhir Yadav"
    },
    email : "sudshfkshf",
    isloggedIn : false

}
// console.log(user2);
// console.log(user2.name.fullName);

//const user3 = {user1,user2}// nested object is going to create.
const user3 = Object.assign(user1,user2)
const user4 = Object.assign({},user1,user2)// {} this is going to grunteed that answer is correcr.
//console.log(user3);
//console.log(user4);

const user5 ={...user1, ...user2}// Seprade method
//console.log(user5);

const userarray = [
    {
        id : "12345",
        name : "Suhifkfgh",
        class : "xi",
        subject : "gfgfghfghg",
    },
    {
        id : "345224",
        name : "fhskdhhf",
        class : "x",
        subject : "hsgjgg"
    }
]
//console.log(userarray[1].id);// Method to access inner object in an array.

// console.log(Object.keys(user2));// This is going to form an array of all keys.
// console.log(Object.valuse(user2));
// console.log(Object.entries(user2));
//console.log(user2.hasOwnProperty('name'));// used to check whatever this key or value is exist or not in object.

// Other method to access object element called destructure.
const {email} = user2
console.log(email);



//An object/Array{bject} without name called json.
// API is now days in form of .json.
// json 
// {
//     "name": "sudhir",
//     "class" : "ci"

// }
