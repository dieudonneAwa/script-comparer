import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { StyledAuth, NavigateBack } from './Styles';

const SignUp = () => {
  const router = useHistory();

  const navigateBack = () => router.goBack();

  const handleSignUp = (e) => {
    e.preventDefault();
    router.push('/comparisons');
  }

  return (
    <StyledAuth>
      <NavigateBack>
        <button onClick={navigateBack}>&#8592;</button> Back
      </NavigateBack>
      <form>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="name">Enter Name</label>
          <input type="text" name="name" id="name" placeholder="Full name" />
        </div>
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

export default SignUp;
