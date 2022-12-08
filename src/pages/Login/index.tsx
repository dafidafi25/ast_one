import Button from "@/components/atom/Button";
import Spacer from "@/components/atom/Spacer";
import TextInput from "@/components/atom/TextInput";
import AuthService from "@/services/Auth/AuthService";
import React, { useEffect } from "react";
import styled from "styled-components";
import "./login.css";

interface ILoginProps {}

export const Login: React.FC<ILoginProps> = () => {
  useEffect(() => {
    console.log("wawa");
    AuthService.getUserList().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="container">
      <Title>Login Page</Title>
      <div>
        <Spacer height={40} />
        <TextInput placeholder="username" />
        <Spacer height={20} />
        <TextInput placeholder="password" />
        <Spacer height={20} />

        <Button fullwidth onClick={() => console.log("wawa")}>
          Login
        </Button>
      </div>
    </div>
  );
};

const Title = styled.h4``;

export default Login;
