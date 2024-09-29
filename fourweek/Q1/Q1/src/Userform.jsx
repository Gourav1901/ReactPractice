import { useState } from 'react';

// Custom hook for handling form state
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Function to reset the form
  const resetForm = () => {
    setValues(initialValues);
  };

  return [values, handleChange, resetForm];
}

export default useForm;
