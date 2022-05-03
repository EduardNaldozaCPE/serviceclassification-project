const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome')
    }
    else if(req.url === '/about'){
        res.end('About')
    } else {
        res.end(   `
        <h1>404</h1>
        `);
    }
    
});

server.listen(5000)