import Button from "@/components/atom/Button";
import Spacer from "@/components/atom/Spacer";
import TextInput from "@/components/atom/TextInput";
import { useAppSelector } from "@/hooks/useAppSelector";
import AuthService from "@/services/Auth/AuthService";
import { getUser } from "@/store/features/Auth/AuthAction";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import "./login.css";

interface ILoginForm {
  username: string;
  password: string;
}

interface IErrorForm {
  username: string;
  password: string;
}

interface ILoginProps {}

export const Login: React.FC<ILoginProps> = () => {
  const dispatch = useDispatch();

  const { handleSubmit, control } = useForm<ILoginForm>();
  const UserDB = useAppSelector((state) => state.auth.byUsername);

  const [FormError, setFormError] = React.useState<IErrorForm>({
    username: "",
    password: "",
  });

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const handleAuth = (form: ILoginForm) => {
    // check if form is empty
    if (form.username === "") {
      setFormError((oldstate) => ({
        ...oldstate,
        username: "Username is required",
      }));
    }
    if (form.password === "") {
      setFormError((oldstate) => ({
        ...oldstate,
        password: "Password is required",
      }));
    }

    let isAuthenticated = true;
    if (UserDB[form.username] == null) {
      isAuthenticated = false;
      setFormError((oldstate) => ({
        ...oldstate,
        username: "Username doesn't exist",
      }));
    } else if (UserDB[form.password] == null) {
      isAuthenticated = false;
      setFormError((oldstate) => ({
        ...oldstate,
        username: "Wrong Password",
      }));
    }
  };

  return (
    <div className="container">
      <Title>Login Page</Title>
      <form onSubmit={handleSubmit(handleAuth)}>
        <Spacer height={40} />
        <Controller
          name="username"
          control={control}
          render={({ field, formState }) => (
            <TextInput
              placeholder="username"
              onChangeText={(text) => {
                field.onChange(text);
                setFormError((oldstate) => ({
                  ...oldstate,
                  username: "",
                }));
              }}
              value={field.value}
              variant={FormError.username != "" ? "error" : "primary"}
            />
          )}
        />
        <Spacer height={20} />
        <Controller
          name="password"
          control={control}
          render={({ field, formState }) => (
            <TextInput
              placeholder="password"
              onChangeText={(text) => {
                field.onChange(text);
                setFormError((oldstate) => ({
                  ...oldstate,
                  password: "",
                }));
              }}
              value={field.value}
              variant={FormError.password != "" ? "error" : "primary"}
            />
          )}
        />
        <Spacer height={20} />

        <Button fullwidth onClick={() => console.log("wawa")}>
          Login
        </Button>
      </form>
    </div>
  );
};

const Title = styled.h4``;

export default Login;
