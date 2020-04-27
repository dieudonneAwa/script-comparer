import React from 'react'
import styled from 'styled-components'
import { FileZip  } from 'styled-icons/icomoon';
import { NavigateBack } from '../auth/Styles';
import { useHistory } from 'react-router-dom';

const StyledComparisons = styled.div`
  min-height: 400px;
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  align-content: center;
  color: #1f2c46;

  h1 {
    text-align: center;
    margin: 100px;
  }

  #comparisons {
    align-self: center;
    border-collapse: collapse;
    width: 80%;
  }

  #comparisons td,
  #comparisons th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  #comparisons tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  #comparisons tr:hover {
    background-color: #ddd;
  }

  #comparisons th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: rgba(108, 99, 255, 1);
    color: white;
  }

  animation-name: fadein;
  animation-duration: 0.8s;
  animation-timing-function: ease-in-out;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0.05;
    }
    40% {
      opacity: 0.4;
    }
    60% {
      opacity: 0.6;
    }
    80% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.9;
    }
  }
`;

const Comparisons = () => {
  const router = useHistory();
  const navigateBack = () => router.push('/');
  
  return (
    <StyledComparisons>
      <NavigateBack>
        <button onClick={navigateBack}>&#8592;</button> Home
      </NavigateBack>
      <h1>
        <FileZip style={{ width: '2rem', marginRight: '1rem', marginTop: '-5px' }} />
        My Comparisons
      </h1>
      <table id="comparisons">
        <tr>
          <th>Student names</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>John Doe and Johnson</td>
          <td>delete</td>
        </tr>
        <tr>
          <td>Johnson and James</td>
          <td>delete</td>
        </tr>
        <tr>
          <td>Williams and Tyler</td>
          <td>delete</td>
        </tr>
        <tr>
          <td>James and Stephan</td>
          <td>delete</td>
        </tr>
        <tr>
          <td>Tyler and John Doe</td>
          <td>delete</td>
        </tr>
        <tr>
          <td>Stephan and Catherina</td>
          <td>delete</td>
        </tr>
        <tr>
          <td>Helena and Williams</td>
          <td>delete</td>
        </tr>
        <tr>
          <td>Catherina and Elija</td>
          <td>delete</td>
        </tr>
        <tr>
          <td>Elija and Rebeca</td>
          <td>delete</td>
        </tr>
      </table>
    </StyledComparisons>
  );
}

export default Comparisons
