import React, { useState } from "react";
import { ISignupForm } from "../../model/NoteTypes";

const Signup: React.FC = () => {
  const [form, setForm] = useState<ISignupForm>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSignup} className='auth-form'>
      <input
        type='text'
        name='username'
        value={form.username}
        onChange={handleInputChange}
        placeholder='Username'
        required
      />

      <input
        type='email'
        name='email'
        value={form.email}
        onChange={handleInputChange}
        placeholder='Email'
        required
      />
      <input
        type='password'
        name='password'
        value={form.password}
        onChange={handleInputChange}
        placeholder='Password'
        required
      />
      <input
        type='password'
        name='confirmPassword'
        value={form.confirmPassword}
        onChange={handleInputChange}
        placeholder='Confirm Password'
        required
      />
      <button type='submit' className='auth-btn'>
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
