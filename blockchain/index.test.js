const Blockchain = require('./index');
const Block = require('./block');

describe('Blockchain', () => {


    let bc;
    beforeEach(() => {
        bc = new Blockchain();
        bc2 = new Blockchain();
            });

    it('starts with firstBlock' , () => {
        expect(bc.chain[0]).toEqual(Block.firstBlock())
    })

    it('adds a new block', () => {
        const data = 'foo';
        bc.addBlock(data);

        expect(bc.chain[bc.chain.length -1].data).toEqual(data);
    })

    it('validates a valid chain', () => {
        bc2.addBlock('chainValidation');

        expect(bc.isValidChain(bc2.chain)).toBe(true);
    });

    it('invalidates a chain with corrupt firstBlock()', () => {
        bc2.chain[0].data = 'corrupt data';

        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    it('invalidates corrupt chain', () => {
        bc2.addBlock('newBlock');
        bc2.chain[1].data = 'not NEw block';

        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    it('replaces a chain if new chain is valid', () => {
        bc2.addBlock('goo');
        bc.replaceChain(bc2.chain);

        expect(bc.chain).toEqual(bc2.chain);
    });

    it('doesnt replace a chain with less or equal length', () => {
        bc.addBlock('newBlock');

        bc.replaceChain(bc2.chain);

        expect(bc.chain).not.toEqual(bc2.chain)
    })
});