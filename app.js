var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static('.'));

app.listen(port);

console.log("Server started with port", port);
