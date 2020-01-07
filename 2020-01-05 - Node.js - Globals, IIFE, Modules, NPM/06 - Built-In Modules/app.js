// OS = Operating System
const os = require("os");

console.log("Free Memory: " + os.freemem());
console.log("Home Directory: " + os.homedir());
console.log("Username: " + os.userInfo().username);


