import Magnify from "@/assets/icons/Magnify";
import React from "react";
import styled from "styled-components";

interface ISearchBarProps {
  onChangeText?: (text: string) => void;
  value?: string;
}

export const SearchBar: React.FC<ISearchBarProps> = ({
  onChangeText,
  value,
}) => {
  return (
    <Container>
      <TextInput placeholder="Search"></TextInput>
    </Container>
  );
};

const Container = styled.div`
  align-self: center;
  flex-direction: row;
`;

const TextInput = styled.input`
  align-self: center;
  padding: 10px 25px;
  min-width: 400px;
  border-radius: 20px;
  border: none;
  outline: none;

  padding-right: 25px;
  background: url("https://static.thenounproject.com/png/101791-200.png")
    no-repeat right;
  background-position: 96% 50%;
  background-size: 20px;
  background-color: #f1f3f4;

  ::placeholder {
    text-align: center;
  }

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

export default SearchBar;
