import React from 'react';

import { LayoutContainer, InputContainer, OutputContainer } from './Layout.styled';

const Layout = ({ input, output }) => (
  <LayoutContainer>
    <InputContainer>{input}</InputContainer>
    <OutputContainer>{output}</OutputContainer>
  </LayoutContainer>
);

export default Layout;
