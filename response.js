const http = require('http');


const age=26;

const server = http.createServer((req,resp)=>{
    resp.setHeader("Content-type","text/html");  // for using the h2 tag and other
    resp.write('<h2>Hritik Thakur</h2>');
    resp.write(`
    <html>
    <head>
    <title>Code By Hritik</title>
    <body>
    <h1>Hello World</h1>
    <h2>`+age+`</h2>
    <h2>`+new Date()+`</h2>
</body>
</head>
</html>
`)
    resp.end();
    process.exit();
})
server.listen(4000);


// Ques --> how we exit with any request ??
//     resp.end();
// Ques-> how we exit whole process??
//      --> process.exit();

