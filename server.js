const http =require("http");
http.createServer((req,resp)=>{
    resp.write("This is Hritik Thakur `console.log()` is one of the most commonly used and important debugging tools in JavaScript, and it plays a crucial role in both browser-based JavaScript and Node.js environments. In Node.js, `console.log()` is primarily used to display output directly in the terminal or command prompt, making it extremely useful for backend development, server-side logic, API testing, file system operations, and application debugging. Although the syntax of `console.log()` remains exactly the same as in browser JavaScript, the environment in which it runs is completely different. In Node.js, there is no browser, no DOM, and no graphical interface; instead, the JavaScript code runs on the server using the V8 engine, and `console.log()` helps developers track variable values, function outputs, execution flow, and errors in real time through the console. This makes it an essential tool for understanding how the program behaves during execution, especially when working with asynchronous code, callbacks, promises, and server responses. By using `console.log()` effectively in Node.js, developers can quickly identify issues, verify logic, and ensure that their backend applications are running as expected, making it a simple yet powerful feature for building reliable and efficient server-side applications.\n" +
        "<h1>Hello India</h1>.red");
    resp.end("Hello") // end is verry necessary

}).listen(9001);


http.createServer((req,resp)=>{
    resp.write("This is another server");
    resp.end("This is ending");
}).listen(5002);


// INTERVIEW QUESTION
//
// Ques ---> How to create server ?
//     by using http.createserver
//
// Ques->  server kis core package ki help se create karte hai
// -->  by usinng http
//
//
// Ques -->how to end response .
//     what is req and resp;

//
// Ques: can we create multiple servers?
//     yes





















