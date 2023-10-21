// eslint-disable-next-line no-unused-vars
import React from "react";
import Inputs from "./Inputs";

const UserForm = () => {
  return (
    <>
      <form>
        <h1>Login Form</h1>
        <Inputs labelText="First name" error="Поле не должно быть пустым" />
        <Inputs labelText="Last name" error="Поле не должно быть пустым" />
        <Inputs labelText="Email" error="не валидный email @" type="email" />
        <Inputs
          labelText="Password"
          error="Пароль должен содержать больше чем 6 символов"
          type="password"
        />
        <Inputs labelText="Address" error="Поле не должно быть пустым" />
        <Inputs labelText="City" error="Поле не должно быть пустым" />
        <Inputs
          labelText="Age"
          error="Возраст должен быть старше 18 лет"
          type="age"
        />
        <button>Register</button>
      </form>
    </>
  );
};

export default UserForm;
