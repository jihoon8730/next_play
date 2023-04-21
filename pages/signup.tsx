import React from "react";

import { useForm } from "react-hook-form";

import GoogleSvg from "../public/images/google.svg";
import Facebook from "../public/images/facebook.svg";

// MUI
import TextField from "@mui/material/TextField";
import Button, { ButtonProps } from "@mui/material/Button";

import styled from "styled-components";

export default function Signup() {
  const { register, watch } = useForm();

  console.log(watch());

  return (
    <Container>
      <Back>← back</Back>
      <SigninContainer>
        <Title>Sign in</Title>
        <BodyBox>
          <SocalBox>
            <SocalLogin>
              <GoogleSvg />
              Continue with Google
            </SocalLogin>
            <SocalLogin>
              <Facebook />
              Continue with Facebook
            </SocalLogin>
          </SocalBox>
          <HrBox>
            <Line />
            <Or>or</Or>
            <Line />
          </HrBox>
          <InputBox>
            <TextField
              label="Email"
              variant="outlined"
              placeholder="e.g. example@silkone.io"
              {...register("email", { required: true })}
            />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              {...register("password", { required: true })}
            />
            <BootstrapButton variant="contained" type="submit">
              Sign In
            </BootstrapButton>
          </InputBox>
        </BodyBox>
      </SigninContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 552px;
  height: 744px;
  margin: 50px auto;
`;

const Back = styled.button`
  width: 79px;
  height: 32px;
  border: 0px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const SigninContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 552px;
  height: 704px;
  padding: 56px 24px;
  border: 1px solid #dfdfdf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 360px;
  height: 64px;
  padding-bottom: 16px;
  font-size: 32px;
  font-weight: 700;
  color: #121212;
`;

const BodyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 360px;
  height: 408px;
  margin-top: 24px;
`;

const SocalBox = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SocalLogin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 360px;
  height: 56px;
  border: 1px solid #383b43;
  border-radius: 4px;
  background-color: #ffffff;
  color: #383b43;
  font-size: 16px;
  cursor: pointer;
`;

const HrBox = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 360px;
  height: 24px;
  gap: 8px;
`;

const Line = styled.hr`
  width: 164.5px;
  border: 1px solid #d6d4d3;
`;

const Or = styled.p`
  color: #848b9d;
  font-size: 16px;
`;

const InputBox = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 360px;
  height: 216px;
`;

const BootstrapButton = styled(Button)<ButtonProps>`
  width: 360px;
  height: 56px;
  background-color: #0051f1;

  :hover {
    background-color: #0051f1;
  }
`;
