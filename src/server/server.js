const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'));

//start the server
const port = 8000;
const server = app.listen(port,  ()=>{
    console.log(`server running on port ${port}`);
});

//localhost:${port}
//APIs
app.post(`/query`, (req, res) => {
    console.log("Post to API 'Query'");
    res.send({status:'complete'});
});