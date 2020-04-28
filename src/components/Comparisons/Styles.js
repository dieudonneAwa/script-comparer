import styled from 'styled-components';

export const StyledCompare = styled.div`
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

export const StyledComparisons = styled.div`
  min-height: 400px;
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  align-content: center;
  color: #1f2c46;

  .avatar {
    position: absolute;
    right: 20px;
    top: 20px;
    &:hover {
      cursor: pointer;
    }
  }

  h1 {
    text-align: center;
    margin: 70px;
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

  .compare-btn {
    width: 150px;
    position: relative;
    align-self: flex-end;
    margin: 0 150px 20px 0;
    height: 30px;
    border: 1px solid #1f2c46;
    background-color: #1f2c46;
    color: #fff;
    box-shadow: 0 0 16px rgba(108, 99, 255, 0.1);
    font-size: 1;

    &:hover {
      box-shadow: 0 30px 60px rgba(108, 99, 255, 0.5);
      cursor: pointer;
      transition: all 0.5s ease-out;
      span {
        position: absolute;
        transform: translateX(70%);
        transition: all 0.5s ease-out;
      }
    }
  }
`;

export const Form = styled.form`
  background-color: #fafafa;
  min-height: 220px;
  width: 400px;
  border: 1px solid #ccc;
  margin-top: 50px;
  padding: 20px 20px 30px 20px;
  display: flex;
  flex-flow: column nowrap;

  .form-group {
    width: 100%;
    margin: 10px 0;

    input[type='text'] {
      width: 100%;
      height: 30px;
      border: 1px solid #bfd3f3;
      background-color: #f2f5fd;
      border-radius: 3px;
      outline: none;
      padding: 5px;
      margin: 5px 0;
      font-size: 0.8rem;
    }

    input[type='file'] {
      width: 100%;
      margin-bottom: 30px;
    }
  }
  .submit-btn {
    border: 1px solid #1f2c46;
    background-color: #1f2c46;
    color: #fff;
    width: 100px;
    height: 30px;
    font-size: 0.9rem;
  }
`;
