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

//    ******************************- Memory - **************************

   /*
     Stack (Primitive) , Heap (Non-Primitive)
     
     => when memory allocation in stack we find a copy of that.
     => when memory allocation in heap we find a reference of that.
   */

     let  myYoutube = "VinaySingh"
      
     let anothername = myYoutube;
     anothername = "chaiaurvinay"

     console.log(myYoutube);
     console.log(anothername);

     let userOne = {
        email: "usergoogle.com",
        upi:"user@ybl"
     }

     let userTwo = userOne;

     userTwo.email = "vinay@google.com"

     console.log(userOne.email);
     console.log(userTwo.email);
