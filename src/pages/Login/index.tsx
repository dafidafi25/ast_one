import Button from "@/components/atom/Button";
import Spacer from "@/components/atom/Spacer";
import TextInput from "@/components/atom/TextInput";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import AuthService from "@/services/Auth/AuthService";
import { getUser } from "@/store/features/Auth/AuthAction";
import { saveUser } from "@/store/features/Profile/Profile";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const AsyncDispatch = useDispatch();
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { handleSubmit, control } = useForm<ILoginForm>();
  const UserDB = useAppSelector((state) => state.auth.byUsername);

  const [FormError, setFormError] = React.useState<IErrorForm>({
    username: "",
    password: "",
  });

  useEffect(() => {
    AsyncDispatch(getUser());
  }, []);

  const handleAuth = (form: ILoginForm) => {
    // check if form is empty
    let isValid = true;
    if (form.username == "" || form.username == null) {
      setFormError((oldstate) => ({
        ...oldstate,
        username: "Username is required",
      }));
      isValid = false;
    }
    if (form.password == "" || form.password == null) {
      setFormError((oldstate) => ({
        ...oldstate,
        password: "Password is required",
      }));
      isValid = false;
    }

    if (!isValid) return;

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
        password: "Wrong Password",
      }));
    }
    if (!isAuthenticated) return;

    dispatch(saveUser(UserDB[form.username]));
    navigate("/Dashboard");
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
        {FormError.username != "" && (
          <ErrorText>{FormError.username}</ErrorText>
        )}
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
        {FormError.username != "" && (
          <ErrorText>{FormError.password}</ErrorText>
        )}
        <Spacer height={20} />

        <Button fullwidth onClick={() => {}}>
          Login
        </Button>
      </form>
    </div>
  );
};

const Title = styled.h4``;

const ErrorText = styled.p`
  color: red;
  padding: 0;
  margin: 0;
`;

export default Login;
