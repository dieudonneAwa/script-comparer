import React from 'react';
import { StyledHeader } from './Styles';

const Header = () => (
  <StyledHeader>
    <div className="intro">
      <h1>Compare files</h1>
      <h1>for similarity</h1>
      <button className="get-started">GET STARTED</button>
      <button className="submit-comparison">
        Submit for comparison <span>&#8594;</span>
      </button>
    </div>
    <div className="bg-header"></div>
  </StyledHeader>
);

export default Header;
