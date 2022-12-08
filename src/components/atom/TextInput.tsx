import React from "react";
import styled from "styled-components";

interface ITextInputProps {
  placeholder?: string;
}

export const TextInput: React.FC<ITextInputProps> = ({ placeholder }) => {
  // create intput text with centered placeholder
  return <Input placeholder={placeholder} type="text" />;
  // return <Input placeholder={placeholder} type="text" />;
};

// text input with centered placeholder using styled components

const Input = styled.input`
  border-radius: 20px;
  padding: 10px 15px;
  width: 300px;
  ::placeholder {
    text-align: center;
  }

  /* or, for legacy browsers */

  ::-webkit-input-placeholder {
    text-align: center;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    text-align: center;
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    text-align: center;
  }

  :-ms-input-placeholder {
    text-align: center;
  }
`;

export default TextInput;
