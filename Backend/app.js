const http = require('http'); //Declaring a http variable to add package http 
const httpServer = http.createServer(); //Declaring a httpServer variable to create a http server
const port = 8080; //Using port 8080 to connect the http server


httpServer.on('request', (req, res) => {//Sets up a listener for respond event in http. Where a callback function is executed
    res.write('Welcome to Rave WBL')// Wrote a response to the server when the user enters the server
    res.end() //Ends the response
}).listen(port)