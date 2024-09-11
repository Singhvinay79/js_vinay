/*
  # Primitive data type ******************************
      7 types of primitive  datatypes :
      1- String
      2- Number
      3- Boolean
      4- null
      5- undefined
      6- symbole
      7- BigInt
 */

      const score= 100
      const coreValue = 100.3
      const isLoggedIn= false
      const outsideTemp = null
      let userEmail;
      // let userEmail = undefined 

     // **************************************************

     const id = Symbol('123')
     const anotherId = Symbol('123')
     
    //  console.log(id === anotherId);

     const bigNumber = 123321123321123321n

/*
  # Reference (Non primitive)
     1- Array
     2- Object
     3- Functions

 */

     const heros = ["Shaktiman" ,"Naagraj" , "Doga"];

     let myObj = {
        name:"vinay",
        age:22,
     }

   function function_name(){
      console.log("Hello Vinay !!!!!!")
   }

   const myFunction = function_name();
   
   console.log(myFunction);