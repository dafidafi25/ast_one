import { useAppSelector } from "@/hooks/useAppSelector";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface IAppBarProps {}

export const AppBar: React.FC<IAppBarProps> = () => {
  const ProfileState = useAppSelector((state) => state.profile);
  const navigate = useNavigate();

  useEffect(() => {
    if (ProfileState.user == undefined) navigate("/login");
  }, []);

  return (
    <Header>
      <Title>Cinta Coding</Title>
      <PageTitle>Post</PageTitle>

      <Name>
        Welcome,{" "}
        <span style={{ color: "#4285e0" }}>{ProfileState.user?.name}</span>
      </Name>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
//create text with blue underline

const PageTitle = styled.div`
  display: inline-block;
  padding: 0 30px;
  font-size: 20px;
  color: gray;
  border-bottom: 3px solid #4285e0;
  padding-bottom: 10px;
  margin-top: 30px;
  font-align: center;
`;

const Title = styled.h1`
  font-size: 20px;
  width: 250px;
`;

const Name = styled.h1`
  font-size: 20px;
  width: 250px;
`;
export default AppBar;
