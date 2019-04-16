const express = require('express');
const newEngine = require('@comunica/actor-init-sparql').newEngine;

const app = express();
const port = 4000;
const engine = newEngine();

app.use(express.static('public'));

app.get('/', (req, res) => {
    handleData().then(result => {
        res.set('content-type', 'text/plain; charset=utf-8');
        res.send(result);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

function handleData () {
    /*
        ADD CODE HERE
     */
}
