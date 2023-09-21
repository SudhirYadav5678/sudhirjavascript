//Singleton (Object.create) this is used to create singleton object.

//object literals
const mysym = Symbol("key1")
const user = {//in object keys and values concept are used same as python dictionary.
    name : "sudhir",
    //mysym : "Key",
    [mysym] : "Key",// by using [] now mysym used as symbol.
    "full_name" :"sudhir yadav",
    age : 19,
    email : "Suhdiryadav51",
    isLoggedIn :"false",
    daysLogged :["mon","Sun"],
}

// console.log(user.email);
// console.log(user.age);
// console.log(user["email"]);
// console.log(user.full_name);//in this case when key defined as strings this methods not work.
// console.log(user["full_name"]);
//console.log(typeof(mysym));//symbol
// console.log(typeof(user.mysym));//string in this key not used as symbol.
// console.log(user.mysym);
// console.log(typeof(user[mysym]));
// console.log((user[mysym]));

// user.email = "jsjsjhfekf.com"
// Object.freeze(user)//there no value going to change.
// user.email = "12345Sjjwrjw.com"
// console.log(user);

user.greetings = function(){
    console.log("Hello User ");
}
user.greetings2 = function(){
    console.log(`hello user ${user.name} Welcome to Website`);// in this name is going to change
}
user.greetings3 = function(){
    console.log(`hello user ${this.name} Welcome to Website`);// in this name is going to change here "this" is used to use properties of object. 
}
console.log(user.greetings());
console.log(user.greetings2());
console.log(user.greetings3());