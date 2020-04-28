import React, { useContext, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { StyledAuth, NavigateBack } from './Styles';
import {
  Context as AuthContext,
  Provider as AuthProvider,
} from '../../context/authContext';

const SignIn = () => {
  const router = useHistory();
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateBack = () => router.goBack();

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };
  
  const handleSignIn = async (e) => {
    e.preventDefault();
    if (email && password) {
      const res = await signIn({ email, password });
      if (res) router.push('/comparisons');
    }
  };

  return (
    <StyledAuth>
      <NavigateBack>
        <button onClick={navigateBack}>&#8592;</button> Back
      </NavigateBack>
      <form>
        <h2>Login</h2>
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
        <button className="sign-up" onClick={handleSignIn}>
          Click to vew History page
        </button>
        <p>
          Don't have an Account?{' '}
          <NavLink to="/sign_up">Create an account</NavLink>
        </p>
      </form>
    </StyledAuth>
  );
};

export default () => (
  <AuthProvider>
    <SignIn />
  </AuthProvider>
);
