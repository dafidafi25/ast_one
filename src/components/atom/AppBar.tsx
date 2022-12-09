import { useAppSelector } from "@/hooks/useAppSelector";
import { saveUser } from "@/store/features/Profile/Profile";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./style.css";

interface IAppBarProps {}

export const AppBar: React.FC<IAppBarProps> = () => {
  const ProfileState = useAppSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (ProfileState.user == undefined) {
      const user = localStorage.getItem("user");

      if (user == null || user == undefined) navigate("/login");
      else dispatch(saveUser(JSON.parse(user)));
    }
  }, []);

  return (
    <Header>
      <Title>Cinta Coding</Title>
      <PageTitle>Post</PageTitle>

      <Name className="dropdown">
        Welcome,{" "}
        <span style={{ color: "#4285e0" }}>{ProfileState.user?.name}</span>
        <div className="dropdown-content">
          <p>Detail Profile</p>
        </div>
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
