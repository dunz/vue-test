import {sum} from '../../../src/util/sum';

describe('sum', () => {
    it('add 2+3 equals 5', () => {
        expect(sum(2, 3)).to.equal(5);
    });
});