import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from 'react-avatar';
import { FileZip } from 'styled-icons/icomoon';
import SubmissionForm from './SubmissionForm';
import { NavigateBack } from '../auth/Styles';
import { StyledCompare } from './Styles';

const Compare = () => {
  const router = useHistory();
  const navigateBack = () => router.replace('/comparisons');
  const [showLogout, setShowLogout] = useState(false);

  const handleAvatarClick = () => {
    setShowLogout(true);
  };

  const handleLogout = () => router.push('/');

  return (
    <StyledCompare>
      <div className="avatar">
        <Avatar
          name="Sami"
          email="sami@gmail.com"
          round
          size="38"
          onClick={handleAvatarClick}
        />
        {showLogout && (
          <div className="logout" onClick={handleLogout}>
            <button>Logout</button>
          </div>
        )}
      </div>
      <NavigateBack>
        <button onClick={navigateBack}>&#8592;</button> back
      </NavigateBack>
      <FileZip
        style={{
          width: '4rem',
          marginBottom: '1rem',
          marginTop: '50px',
          color: 'rgba(108, 99, 255, 0.5)',
        }}
      />
      <div className="forms">
        <SubmissionForm />
      </div>
    </StyledCompare>
  );
};

export default Compare;
