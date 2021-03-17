const Block = require('./block');

describe('Block', () => {
    let data, lastBlock, block;
    beforeEach(() => {
        data = 'bar';
        lastBlock = Block.firstBlock();
        block = Block.mineBlock(lastBlock, data)
    })

    it('sets the `data` to match the input', () => {
        expect(block.data).toEqual(data);
    });


    it('sets the `;astHash` to match the hash of the lastblock ', () => {
        expect(block.lastHash).toEqual(lastBlock.hash);

    })

});