import React from 'react';
import { FileZip } from 'styled-icons/icomoon';
import Avatar from 'react-avatar';
import { NavigateBack } from '../auth/Styles';
import { useHistory } from 'react-router-dom';
import { StyledComparisons } from './Styles';

const Comparisons = () => {
  const router = useHistory();
  const navigateBack = () => router.push('/');

  const goToCompare = () => router.replace('/compare');

  return (
    <StyledComparisons>
      <div className="avatar">
        <Avatar name="Sami" email="sami@gmail.com" round size="38" />
      </div>
      <NavigateBack>
        <button onClick={navigateBack}>&#8592;</button> Home
      </NavigateBack>
      <h1>
        <FileZip
          style={{ width: '2rem', marginRight: '1rem', marginTop: '-5px' }}
        />
        My Comparisons
      </h1>
      <button className="compare-btn" onClick={goToCompare}>
        Create comparison <span>&#8594;</span>
      </button>
      <table id="comparisons">
        <thead>
          <tr>
            <th>Student names</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </StyledComparisons>
  );
};

export default Comparisons;
