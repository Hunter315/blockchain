const Transaction = require('./transaction');

const Wallet = require('./index');

describe('Transaction', () => {
    let transaction, wallet, recipient, amount;

    beforeEach(()=> {
        wallet = new Wallet();
        amount = 50;
        recipient = 'r3c1p13nt';
        transaction = Transaction.newTransaction(wallet, recipient, amount);
    });

    it('outputs the amount subtracted from the wallet balance', () => {

        expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount).toEqual(wallet.balance - amount)
    });

    it('ouputs the amount added to the recipient', () => {
        expect(transaction.outputs.find(output => output.address === recipient).amount).toEqual(amount)
    });

    it('inputs the balance of the wallet', () => {
        expect(transaction.input.amount).toEqual(wallet.balance);
    });

    it('validates a valid transaction', () => {
        expect(Transaction.verifyTransaction(transaction)).toBe(true);
    });

    it('invalidates a corrupt transaction', () => {
        transaction.outputs[0].amount = 50000;
        expect(Transaction.verifyTransaction(transaction)).toBe(false);
    });

    describe('transaction with an amount that exceeds the balance', () => {
      beforeEach(() => {
          amount = 50000;
          transaction = Transaction.newTransaction(wallet, recipient, amount);
      });
      
      it('Does not create the transaction', () => {
        expect(transaction).toEqual(undefined); 
      });

    });

    describe('Updating a transaction', () => {
        let nextAmount, nextRecipient;

        beforeEach(()=> {
            nextAmount = 20;
            nextRecipient = 'n3xt-addre55';
            transaction = transaction.update(wallet, nextRecipient, nextAmount);
        });

        it('Subtracts the next amount from the senders output', () => {
            expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount).toEqual(wallet.balance - amount - nextAmount);
        });

        it('Outputs an amount for the next recipient', () => {
            expect(transaction.outputs.find(output => output.address === nextRecipient).amount).toEqual(nextAmount);
        });
    });

    
});