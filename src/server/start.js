//Server is started in this file
//listen in seperate file to help test server
const app = require('./server.js');

//start the server
const port = 8000;
const server = app.listen(port,  ()=>{
    console.log(`server running on port ${port}`);
});