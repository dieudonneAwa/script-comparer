import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Context as AuthContext,
  Provider as AuthProvider,
} from '../../context/authContext';
import { StyledAuth, NavigateBack } from './Styles';

const SignUp = () => {
  const router = useHistory();
  const { signUp, state } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateBack = () => router.goBack();

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (name && email && password) {
      const res = await signUp({ name, email, password });
      if (res) router.push('/comparisons');
    }
  }

  console.log(state);

  return (
    <StyledAuth>
      <NavigateBack>
        <button onClick={navigateBack}>&#8592;</button> Back
      </NavigateBack>
      <form>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="name">Enter Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Enter Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button className="sign-up" onClick={handleSignUp}>
          Click to vew History page
        </button>
        <p>
          Already have an account? <Link to="/sign_in">Sign in</Link>
        </p>
      </form>
    </StyledAuth>
  );
};

export default () => (
  <AuthProvider>
    <SignUp />
  </AuthProvider>
);
