const path = require('path');
const http = require('http');
const express = require('express');

const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);

app.use(express.static(__dirname + '/../dist/'));

// serve frontend files to server
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// start server on specified port
server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
