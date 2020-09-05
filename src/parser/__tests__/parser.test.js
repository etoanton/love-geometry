import parse from '../parser';

describe('parser', () => {
  it('one sentence expression', () => {
    const result = parse('A loves B!');
    expect(result).toEqual({});
  })
});