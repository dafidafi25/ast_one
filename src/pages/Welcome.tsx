import React from "react";
import styled from "styled-components";

interface IWelcomeProps {}

export const Welcome: React.FC<IWelcomeProps> = () => {
  return (
    <Header>
      <Title>Cinta Coding</Title>
      <Button>Login</Button>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 26px;
`;

const Button = styled.button`
  background-color: #4285e0;
  border: none;
  border-radius: 20px;
  padding: 10px 35px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  &:hover {
    opacity: 0.8;
  }
`;

export default Welcome;
