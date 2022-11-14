import React, { useState } from "react";
import { Form } from "react-router-dom";
import axios from "axios";
import SendCode from "../SendCode";
const initialValue = {
  username: "",
  email: "",
  password: "",
};
export default function SignUp() {
  const [showSendCodeInput, setShowSendCodeInput] = useState(false);
  const [value, setValue] = useState(initialValue);

  const changeValues = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.value,
    });
  };
  const signUp = (e) => {
    e.preventDefault();
    if (value.email && value.password && value.username) {
      const urlApi = "https://english-teacher-uz.herokuapp.com/api/auth/signup";
      axios
        .post(urlApi, {
          username: value.username,
          email: value.email,
          password: value.password,
        }).then(res => JSON.stringify(res))
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    }
  };
  return (
    <div>
      <h1>SignUp</h1>
      {(showSendCodeInput && <SendCode />) || (
        <form onSubmit={signUp}>
          <input
            type="text"
            placeholder="username"
            value={value.username}
            name="username"
            onChange={changeValues}
          />

          <br />
          <input
            type="email"
            placeholder="email"
            value={value.email}
            onChange={changeValues}
            name="email"
          />
          <br />
          <input
            type="password"
            placeholder="password"
            value={value.password}
            name="password"
            onChange={changeValues}
          />
          <br />
          <button>Sign Up</button>
        </form>
      )}
    </div>
  );
}
