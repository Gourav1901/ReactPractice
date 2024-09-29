import React from 'react';
import useForm from './useForm';

function SignupForm() {
  // Using the custom hook with initial form values
  const [formValues, handleInputChange, resetForm] = useForm({
    username: '',
    email: '',
    password: '',
  });

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted:', formValues);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;
