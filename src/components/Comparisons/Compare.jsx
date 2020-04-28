import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Avatar from 'react-avatar';
import { FileZip } from 'styled-icons/icomoon';
import SubmissionForm from './SubmissionForm';
import { NavigateBack } from '../auth/Styles';

const StyledCompare = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  align-items: center;

  .avatar {
    position: absolute;
    right: 20px;
    top: 20px;
    &:hover {
      cursor: pointer;
    }

    .logout {
      position: absolute;
      background-color: #fff;
      width: 50px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      border: 1px solid #f1f1f1;
      box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);

      button {
        width: 100%;
        height: 50%;
        font-size: 0.8rem;
        border: none;
        &:hover {
          background-color: #f1f1f1;
        }
      }
    }
  }

  h1 {
    color: rgba(108, 99, 255, 1);
  }

  .forms {
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
  }
`;

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
