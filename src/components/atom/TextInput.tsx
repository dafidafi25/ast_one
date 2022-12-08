import React, { useState } from "react";
import styled from "styled-components";

interface ITextInputProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  variant?: "primary" | "error";
}

export const TextInput: React.FC<ITextInputProps> = ({
  placeholder,
  onChangeText,
  value = "",
  variant = "primary",
}) => {
  const [UIValue, setUIValue] = useState<string>(value);

  return (
    <Input
      style={{ borderColor: variant === "error" ? "red" : "black" }}
      placeholder={placeholder}
      type="text"
      onChange={(e: React.FormEvent<HTMLInputElement>) => {
        onChangeText && onChangeText(e.currentTarget.value);
        setUIValue(e.currentTarget.value);
      }}
      value={UIValue}
    />
  );
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
