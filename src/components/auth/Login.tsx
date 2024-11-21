import React, { useState, useContext } from "react";
import { ILogin } from "../../model/NoteTypes";
import { Form } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/note.context";

const Login: React.FC<any> = () => {
  const [login, setLogin] = useState(false);
  const { setUser } = useContext(UserContext);

  const [form, setForm] = useState<ILogin>({ email: "", password: "" });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const login = { email: form.email, password: form.password };
    try {
      await axios.post(`http://localhost:5007/auth/login`, login);
    } catch (error) {
      console.error({
        error: true,
        message: "error in user logging in ",
        data: null,
      });
    }
  };

  return (
    <form onSubmit={handleLogin} className='auth-form'>
      <input
        type='email'
        name='email'
        placeholder='email'
        value={form.email}
        onChange={handleInputChange}
        required
      />
      <input
        type='password'
        name='password'
        value={form.password}
        placeholder='password'
        onChange={handleInputChange}
        required
      />
      <button type='submit' className='auth-btn'>
        Login
      </button>
    </form>
  );
};

export default Login;
