/* import { useState } from "react";

function Formss() {

    const [data, setData] = useState({
        Fname: '',
        Lname: '',
        email: '',
        password: '',
        confirmpswd: '',
    });

     function handleSubmit = (e) = {
        e.preventDefault();
    } 
  return (
    <div className="container">
      <h1> REact Forms Validation</h1>
      <form onSubmit={handleSubmit}>
        <label>FirstName: </label>
        <input type="text" name="Fname" placeholder="Enter your name" onClick={handleClick}/><br />
        <label>LastName</label>
        <input type="text" name="Lname" placeholder="Enter ypur name" /><br />
        <label>Email</label>
        <input type="email" name="email" placeholder="Enter ypur name" /><br />
        <label>Password</label>
        <input type="password" name="password" placeholder="Enter ypur name" /><br />
        <label>Confirm password</label>
        <input type="tPasswordext" name="confirmpswd" placeholder="Enter ypur name" /><br />
      </form>
    </div>
  );
}

export default Formss;
 */

// src/components/RegisterForm.js

import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
      // Reset form data
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      setErrors({});
    } else {
      // Form is invalid, display validation errors
      setErrors(validationErrors);
    }
  };

  const validateForm = (formData) => {
    let errors = {};

    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;