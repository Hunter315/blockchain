const TransactionPool = require('./transaction-pool');

const Transaction = require('./transaction');

const Wallet = require('./index');


describe('TransactionPool', () => {
    let tp, wallet, transaction;


    beforeEach(() => {

        tp = new TransactionPool();
        wallet = new Wallet();
        transaction = Transaction.newTransaction(wallet, '4354yfgh-54t', 30);
        tp.updateOrAddTransaction(transaction);
    });

    it('Adds a transaction to the pool', () => {
        expect(tp.transactions.find(t => t.id === transaction.id)).toEqual(transaction);
    });

    it('Updates a transaction in the pool', () => {
        const oldTransaction = JSON.stringify(transaction);
        const newTransaction = transaction.update(wallet, 'rterte', 40);
        tp.updateOrAddTransaction(newTransaction);

        expect(JSON.stringify(tp.transactions.find(t => t.id === newTransaction.id))).not.toEqual(oldTransaction);

    })
});