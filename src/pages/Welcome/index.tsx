import Button from "@/components/atom/Button";
import Spacer from "@/components/atom/Spacer";
import React from "react";
import styled from "styled-components";
import "./welcome.css";

interface IWelcomeProps {}

export const Welcome: React.FC<IWelcomeProps> = () => {
  return (
    <>
      <Spacer height={10} />
      <Header>
        <Title>Cinta Coding</Title>
        <Button>Login</Button>
      </Header>
    </>
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

export default Welcome;
