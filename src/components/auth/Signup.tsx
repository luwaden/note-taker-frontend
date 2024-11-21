import React, { useState } from "react";
import { ISignupForm } from "../../model/NoteTypes";
import { title } from "process";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [form, setForm] = useState<ISignupForm>({
    email: "",
    password: "",
    userName: "",
    phoneNumber: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const signup = {
      email: form.email,
      password: form.password,
      userName: form.userName,
      phoneNumber: form.phoneNumber,
    };
    try {
      const response = await axios.post(
        `http://localhost:5007/auth/register`,
        signup
      );
      if (response.data.error) {
        navigate("/login");
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSignup} className='auth-form'>
      <input
        type='text'
        name='userName'
        // value={form.userName}
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

      <input
        type='number'
        name='username'
        // value={form.phoneNumber}
        onChange={handleInputChange}
        placeholder='phone number'
        required
      />

      <button type='submit' className='auth-btn'>
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
