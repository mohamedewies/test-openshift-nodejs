const express = require('express');
const app = express();
app.get('/', function(req, res) {
    res.send('Hello, World from Ewies Open Shift!\n');
});
app.get('/mars', function(req, res) {
res.send('Hello Mars ya Ewies!\n');
});
app.listen(3001, function() {
    console.log('Example app listening on port 3001!');
});
module.exports = app;
