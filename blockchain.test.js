const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {


    let bc;
    beforeEach(() => {
        bc = new Blockchain();
            });

    it('starts with firstBlock' , () => {
        expect(bc.chain[0]).toEqual(Block.firstBlock())
    })

    it('adds a new block', () => {
        const data = 'foo';
        bc.addBlock(data);

        expect(bc.chain[bc.chain.length -1].data).toEqual(data);
    })
})