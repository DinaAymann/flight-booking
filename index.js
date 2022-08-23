const {startServer} = require('./adapters/view/index')

startServer(3007, function () {
    console.log('Example app listening on port 3007.');
})