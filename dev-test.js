const Block = require('./blockchain/block');


const fooBlock = Block.mineBlock(Block.firstBlock(), 'foo');
console.log(fooBlock.toString())
