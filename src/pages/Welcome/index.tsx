import Button from "@/components/atom/Button";
import Spacer from "@/components/atom/Spacer";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "./welcome.css";
import WelcomeImage from "@/assets/images/welcome.jpg";

interface IWelcomeProps {}

export const Welcome: React.FC<IWelcomeProps> = () => {
  const navigate = useNavigate();

  document.body.style.backgroundImage = `url(${WelcomeImage})`;

  return (
    <>
      <Spacer height={10} />
      <Header>
        <Title>Cinta Coding</Title>
        <Button
          onClick={() => {
            document.body.style.backgroundImage = "none";

            //check if component already mounted

            navigate("login");
          }}
        >
          Login
        </Button>
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
