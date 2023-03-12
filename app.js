const express = require('express');
const app = express();
app.get('/', function(req, res) {
    res.send('Hello, World from Ewies Open Shift 2.003!\n');
});
app.get('/mars', function(req, res) {
res.send('Hello Mars ya Ewies!\n');
});

app.get('/valueFromSecret', function(req, res) {
const valueFromSecret = process.env.OWM_API_KEY;
const metrics = process.env.UNITS;
res.send('metrics = ' + metrics);
});

app.listen(3001, function() {
    console.log('Example app listening on port 3001!');
});
module.exports = app;
