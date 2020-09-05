import styled from 'styled-components';
import { UnControlled as CodeMirror } from 'react-codemirror2';

export const TextAreaContainer = styled.div`
  border: 1px solid #eaeaea;
  width: 100%;
  border-radius: 10px;
`;

export const TextArea = styled(CodeMirror)`
  padding: 10px;
`;