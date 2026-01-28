const http= require("http");

const server = http.createServer((req,resp)=>{

    console.log(req.url);
    console.log(req.headers.host);

    if(req.url=="/"){
        console.log(resp.write("<h1>Home Page</h1>"))
    }
    else if(req.url=="/login"){
        console.log(resp.write("<h1>Login Page</h1>"))
    }
    else{
        console.log(resp.write("<h1>other page</h1>"))
    }
    resp.write("<h1>Hello Coders</h1>")
    resp.end('hello');
})
server.listen(6547);
