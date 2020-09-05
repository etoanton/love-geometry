import React, { useEffect, useRef } from 'react';

import 'codemirror/lib/codemirror.css';

import { TextAreaContainer, TextArea } from './TextArea.styled';

const txtAreaOptions = {
  autofocus: true,
  mode: {
    name: "javascript",
    json: true,
    statementIndent: 2
  },
};

const errorCSSStyle = 'color: red; border-bottom: 1px solid red;';

const TextAreaComponent = ({ error, value, onChange }) => {
  const textArea = useRef(null);

  useEffect(() => {
    if (error) {
      const errorLine = error?.location?.start?.line;
      const errorChEnd = error?.location?.end?.column;

      if (error?.location) {
        textArea.current.editor.doc.markText(
          { line: errorLine - 1, ch: 0 },
          { line: errorLine - 1, ch: errorChEnd },
          { css: errorCSSStyle },
        );
      }
    }
  }, [error]);

  return (
    <TextAreaContainer>
      <TextArea
        ref={textArea}
        value={value}
        onChange={(editor, data, value) => onChange(value)}
        autoCursor={false}
        options={txtAreaOptions}
      />
    </TextAreaContainer>
  );
}

export default TextAreaComponent;