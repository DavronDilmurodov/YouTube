import axios from "axios";
import { useRef } from "react";
import { useAuth } from "../../hooks/useAuth";

export const useLoginProps = () => {
  const [, setToken] = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const onLogin = () => {
    let email = emailRef.current.input.value.trim();
    let password = passwordRef.current.input.value.trim();

    axios
      .post(
        "https://reqres.in/api/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => setToken(res.data))
      .catch((err) => console.log(err));
  };
  return { onLogin, emailRef, passwordRef };
};
