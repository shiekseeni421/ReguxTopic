import { React, useRef, useState } from "react";
import { validEmail, validPassword } from "./Regex";

import {
  LoginWrapper,
  InputField,
  ErrorMes,
  InputContainer,
  LoginContainer,
  ButtonEl,
} from "../Styled/LoginPage.style";

function LoginPage() {
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const inputEmailValue = useRef("");
  const inputPasswordValue = useRef("");

  const submitClick = () => {
    if (!validEmail.test(inputEmailValue.current.inputPasswordValue)) {
      setEmailErr(true);
    }
    if (!validPassword.test(inputPasswordValue.current.value)) {
      setPwdError(true);
    } else {
      setEmailErr(false);
      setPwdError(false);
    }

    inputEmailValue.current.value = "";
    inputPasswordValue.current.value = "";
  };
  return (
    <LoginWrapper>
      <LoginContainer>
        <InputContainer>
          <InputField
            placeholder="Enter Email"
            type="email"
            ref={inputEmailValue}
          />
          {emailErr && <ErrorMes>* Your email is invalid</ErrorMes>}
        </InputContainer>
        <InputContainer>
          <InputField
            placeholder="Enter Password"
            type="password"
            ref={inputPasswordValue}
          />
          {pwdError && <ErrorMes>* Your password is invalid</ErrorMes>}
        </InputContainer>
        <ButtonEl onClick={submitClick}>Submit</ButtonEl>
      </LoginContainer>
    </LoginWrapper>
  );
}

export default LoginPage;
