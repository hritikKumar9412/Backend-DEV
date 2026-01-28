// const arg=process.argv;
// console.log("---------------",arg[4]);



// EXAMPLE --> for dynamic port --> taking input from terminal
const arg=process.argv;
const port=arg[2];
const http =require("http");
http.createServer((re,resp)=>{
    resp.write("testing input from cmd")
    resp.end();
}).listen(port);