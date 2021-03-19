const express = require('express');
const Blockchain = require('../blockchain');
const bodyParser = require('body-parser');
const P2PServer = require('./p2p-server');
const Wallet = require('../wallet');
const TransactionPool = require('../wallet/transaction-pool');
const Miner = require('./miner')

const HTTP_PORT = process.env.HTTP_PORT || 3001;


const app = express();
const bc = new Blockchain();
const wallet = new Wallet();
const tp = new TransactionPool();
const p2pServer = new P2PServer(bc, tp);
const miner = new Miner(bc, tp, wallet, p2pServer);



app.use(bodyParser.json());

//see the blockchain
app.get('/blocks', (req, res) => {

    res.json(bc.chain);

});

app.get('/transactions', (req, res) => {

    res.json(tp.transactions);

});
// add a new block 


app.post('/transact', (req, res) => {
    const { recipient, amount } = req.body;
    const transaction = wallet.createTransaction(recipient, amount, bc, tp);
    p2pServer.broadcastTransaction(transaction);
    res.redirect('/transactions');
})

app.get('/public-key', (req, res) => {
    res.json({ publicKey: wallet.publicKey });
});

app.get('/mine-transactions', (req,res) => {
    const block = miner.mine();
    console.log(`New block added: ${block.toString()} `);

    res.redirect('/blocks');
});

app.post('/mine', (req, res) => {
    const block = bc.addBlock(req.body.data);
    console.log("new block added: " + block.toString());

    p2pServer.syncChains();

    res.redirect('/blocks')
})

app.listen(HTTP_PORT, () => console.log(`listening on port ${HTTP_PORT}`));
p2pServer.listen();