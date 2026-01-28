const http = require("http");


const userData=[
    {
        name:"hritik",
        age:21,
        address:'chandausi'
    },
    {
        name:'lakshay',
        age:21,
        address:'delhi'
    },
    {
        name:"sam",
        age:31,
        address:'america'
    },
    {
        name:"mandvi",
        age:29,
        address:'gurugram'
    },
    {
        name:"john",
        age:26,
        address:'england'
    }
]


const server= http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","/application/json");
    resp.write(JSON.stringify(userData));

    resp.end();
})

server.listen(6500);
