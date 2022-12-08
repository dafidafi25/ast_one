import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface IButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <ButtonStyle
      onClick={() => {
        navigate("/login");
      }}
    >
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
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

export default Button;
