const http = require('http');


const routeHandler = require('./withRoutes/router');



const server = http.createServer(routeHandler);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});