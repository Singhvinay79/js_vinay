const accountId = 144533;
let accountEmail = "vinay@gmail.com";
var accountPassword = "12347";
accountCity = "Harsos"

// accountId = 2;   not allowed

accountEmail = "vs@gmail";
accountPassword = "789";
accountCity = "varanasi";
let accountState;

console.log(accountId);

/*
Prefer not use var
because of issues in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

