const generator = require('../generative-aisatsana-alda/aisatana-markov');
const port = process.env.PORT || 8080;
const http = require('http');

const server = http.createServer(function (req, res) {
    try {
        res.end(JSON.stringify(generator.generate()));
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.end("Failed to generate. " + error.toString());
    }
});

server.listen(port);
console.log(`Server running on port ${port}`);