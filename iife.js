//Immediately invkoed function expression (iife)--> ()()

(function name(){// this is named iife.
    console.log("sudir");
})();

( () => {//simple iife.
    console.log(`sudhir`);
} )();//to end line ; used.

(function name(){
    console.log("sudir");
})();

( (name) => {
    console.log(`sudhir ${name}`);
} )("yadav");//to end line ; used.