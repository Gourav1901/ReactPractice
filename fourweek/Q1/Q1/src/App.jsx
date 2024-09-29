import React from 'react';
import SignupForm from './Signupform';  // Component using useForm hook
import UserList from './UserList';      // Component using useFetch hook

function App() {
  return (
    <div className="App">
      <h1>Custom Hooks Example</h1>

      {/* Example of using the useForm custom hook */}
      <section>
        <h2>Signup Form</h2>
        <SignupForm />
      </section>

      {/* Example of using the useFetch custom hook */}
      <section>
        <h2>User List</h2>
        <UserList />
      </section>
    </div>
  );
}

export default App;
