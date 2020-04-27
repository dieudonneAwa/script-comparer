import React from 'react';
import styled from 'styled-components';
import { FileZip } from 'styled-icons/icomoon';
import SubmissionForm from './SubmissionForm';
import { NavigateBack } from '../auth/Styles';
import { useHistory } from 'react-router-dom';

const StyledCompare = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  align-items: center;

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
  const navigateBack = () => router.goBack();
  
  return (
    <StyledCompare>
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
