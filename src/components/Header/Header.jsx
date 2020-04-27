import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledHeader } from './Styles';

const Header = () => {
  const router = useHistory();

  const navigateToSignUp = () => router.push('/sign_up');

  const navigateToSignIn = () => router.push('/sign_in');

  return (
    <StyledHeader>
      <div className="intro">
        <h1>Compare files</h1>
        <h1>for similarity</h1>
        <button className="get-started" onClick={navigateToSignUp}>
          GET STARTED
        </button>
        <button className="login" onClick={navigateToSignIn}>
          Login <span>&#8594;</span>
        </button>
      </div>
      <div className="bg-header">
        <img src="/undraw_file_sync_ot38.svg" alt="" />
      </div>
    </StyledHeader>
  );
};

export default Header;
