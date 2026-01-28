const fs = require('fs');
const os = require('os');

const {log,warn} = require("console");


fs.writeFileSync("dummy.txt","this is a dummy file trying to find modules");
console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());
log("custom log");
warn("custom warn");

// Global Object
console.log('abc');
console.log(process.cwd());
console.log(process.pid);
