import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { StyledAuth } from './Styles';

const SignIn = () => {
  const router = useHistory();

  const navigateBack = () => router.goBack();

  return (
    <StyledAuth>
      <div className="navigate-back">
        <button onClick={navigateBack}>&#8592;</button> Back
      </div>
      <form>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Enter Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button className="sign-up">Login</button>
        <p>
          Don't have an Account?{' '}
          <NavLink to="/sign_up">Create an account</NavLink>
        </p>
      </form>
    </StyledAuth>
  );
};

export default SignIn;
