import peg from 'pegjs';

import grammar from './grammar_config';

const parser = peg.generate(grammar);

const parse = input => parser.parse(input);

export { parser as pegParser };
export default parse;