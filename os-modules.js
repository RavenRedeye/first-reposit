let os = require("os");  
// to get the user info
let user = os.userInfo();
console.log(user);
// to get the system uptime
console.log(`the system uptime : ${os.uptime} seconds`);
 
let op = {
    name:os.name,
    release:os.release,
    memory:os.totalmem
}
console.log(op);