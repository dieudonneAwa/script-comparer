import styled from 'styled-components';
import { screens } from '../../globals/styles';

export const StyledAuth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);

  form {
    background-color: #fafafa;
    min-height: 320px;
    width: 400px;
    border: 1px solid #ccc;
    padding: 20px 20px 30px 20px;
    display: flex;
    flex-flow: column nowrap;
    opacity: 1;
    animation-name: fadein;
    animation-duration: 1s;
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

    h2 {
      text-align: center;
      color: #6c63ff;
      margin-bottom: 25px;
    }
    .form-group {
      width: 100%;
      margin: 10px 0;

      input {
        width: 100%;
        height: 30px;
        border: 1px solid #bfd3f3;
        background-color: #f2f5fd;
        border-radius: 3px;
        outline: none;
        padding: 5px;
        font-size: 0.8rem;
      }
    }

    .sign-up {
      height: 30px;
      margin-top: 20px;
      background-color: #6c63ff;
      color: #fff;
      border: 1px solid #6c63ff;
      border-radius: 3px;
      font-size: 0.9rem;
    }
    p {
      margin-top: 10px;
    }
  }
`;

export const NavigateBack = styled.div`
  position: absolute;
  top: 50px;
  left: 80px;
  color: #1f2c46;
  opacity: 1;

  button {
    font-size: 1.5rem;
    border: 1px solid #f1f1f1;
    border-radius: 50%;
    padding: 10px;
    background-color: #fff;
    width: 60px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);

    &:hover {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      transition: all 0.5s ease-out;
      cursor: pointer;
    }
  }

  ${screens.phone`
    left: 40px;
    button {
      width: 50px;
      padding: 5px;
    }
  `}
  ${screens.smallPhone`
    left: 5px;
    border: 1px dashed yellow;
  `}

  animation-name: fadein;
  animation-duration: 1s;
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
