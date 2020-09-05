import styled from 'styled-components';
import { UnControlled as CodeMirror } from 'react-codemirror2';

export const Container = styled.div`
  width: 100%;
`;

export const JSONContainer = styled(CodeMirror)`
  margin-top: 10px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const ErrorContainer = styled.div`
  margin-top: 10px;
  background-color: #ffd5d5;
  padding: 10px;
  color: #841d1d;
  border-radius: 5px;
`;
