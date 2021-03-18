const express = require('express');
const Blockchain = require('../blockchain');
const bodyParser = require('body-parser');
const P2PServer = require('./p2p-server');


const HTTP_PORT = process.env.HTTP_PORT || 3001;


const app = express();
const bc = new Blockchain();
const p2pServer = new P2PServer(bc);

app.use(bodyParser.json());

//see the blockchain
app.get('/blocks', (req, res) => {

res.json(bc.chain);

});

// add a new block 

app.post('/mine', (req, res) => {
    const block = bc.addBlock(req.body.data);
    console.log("new block added: " + block.toString());
    
    p2pServer.syncChains();

    res.redirect('/blocks')
})

app.listen(HTTP_PORT, () => console.log(`listening on port ${HTTP_PORT}`));
p2pServer.listen();