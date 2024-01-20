//create web server
const express = require('express');
const app = express();
const port = 3000;
//create a static server
app.use(express.static('public'));
//create a route for comments
app.get('/comments', (req, res) => {
    //set up the array of comments
    const comments = [];
}); // Add a closing bracket here
