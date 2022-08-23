const http = require('http');
const express = require('express');
const router = require('./router');
const app = express();
const httpServer = http.createServer(app);
const session = require('express-session');
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('./ping',(request,response)=>response.status(200).send('pong'));
app.use('/', router);

module.exports = {
    startServer: (port, callback) => {
        httpServer.listen(port, callback); ////leh msh app.
        return httpServer ///leh return
    }
}

