import React, { useState, useEffect } from 'react';
import { Layout, TextArea, Output } from './components';

import parse from './parser';

const defaultInput = `A loves B!
A hates B, A loves D while B loves C and D hates A.
A loves B, B loves A and B loves D.
A loves B but B hates A
D loves B and C loves A.
`;

const App = () => {
  const [input, setInput] = useState(defaultInput);
  const [output, setOutput] = useState(defaultInput);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setError(null);
      const result = parse(input.trim());
      setOutput(result);
    } catch(e) {
      setOutput(null);
      setError(e);
    }
  }, [input]);
  
  return (
    <Layout
      input={<TextArea error={error} value={input} onChange={setInput} />}
      output={<Output value={output} error={error} />}
    />
  );
};

export default App;
