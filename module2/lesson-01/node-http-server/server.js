const http = require('http'); // loading the package for our server
const port = 3002; // assigning an entry point/port for our server

const server = http.createServer((request, response) => { // creating and configuring our server
    console.log(`Someone has requested ${request.url}`)

    if(request.url === "/"){ // trying to reach the homepage
        response.write('Welcome to the homepage'); // write in the response
        response.end(); // end my response
    }
    else if(request.url === "/about"){ // trying to reach the homepage
        response.write('About page'); // write in the response
        response.end(); // end my response
    }
    else if(request.url === "/contact"){ // trying to reach the homepage
        response.write('Contact page'); // write in the response
        response.end(); // end my response
    }
    else {
        response.statusCode = 404;
        response.write('404 Page');
        response.end();
      }
});

server.listen(port, () => console.log(`Server is listening on port ${port}`)); // makes it possible for server to listen to incoming request on port 3000