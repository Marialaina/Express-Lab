//require the node modules and create settings variables  
const express = require('express');
const port = 3000;

//create the express app
const app = express();

//configure settings


//mount middleware



//mount routes
app.get(`/`, (req, res) => {
    res.send(`Hello Marialaina`);
})


//tell the app the listen
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});