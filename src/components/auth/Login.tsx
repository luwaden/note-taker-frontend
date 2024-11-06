import React, { useState } from "react";
import { ILogin } from "../../model/NoteTypes";
import { Form } from "react-router-dom";

const Login: React.FC<any> = () => {
  const [form, setForm] = useState<ILogin>({ email: "", password: "" });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
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
