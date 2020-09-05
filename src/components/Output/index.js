import React from 'react';

import { Container, JSONContainer, ErrorContainer } from './Output.styled';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

const options = {
  theme: 'material',
  mode: 'json',
  readOnly: true
};

const Output = ({ value, error }) => (
  <Container>
    {value && (
      <JSONContainer
        value={JSON.stringify(value, null, 2)}
        options={options}
      />
    ) }
    {error && <ErrorContainer>{error.message}</ErrorContainer> }
  </Container>
);

export default Output;