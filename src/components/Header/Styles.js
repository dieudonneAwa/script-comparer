import styled from 'styled-components';
import { screens } from '../../globals/styles';

export const StyledHeader = styled.header`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;

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

  .bg-header {
    img {
      position: absolute;
      right: 3%;
      height: 700px;
      width: 750px;
    }

    ${screens.large`
      img {
        height: 600px;
        width: 1200px;
      }
    `}
    ${screens.desktop`
      img {
        height: 700px;
        width: 800px;
      }
    `}
    ${screens.tablet`
      img {
        height: 600px;
        width: 650px;
      }
    `}
    ${screens.phone`
      img {
        height: 500px;
        width: 50%;
      }
    `}
    ${screens.smallPhone`
      img {
        height: 300px;
        width: 70%;
        left: 15%;
        top: 35%;
      }
    `}
  }

  .intro {
    flex-basis: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 120px;
    z-index: 10;
    h1 {
      font-size: 4.5rem;
      color: #6c63ff;
    }

    ${screens.desktop`
      padding-top: 190px;
    `}
    ${screens.tablet`
      padding-top: 170px;
      padding-left: 50px;
      h1 {
        font-size: 4rem;
        letter-spacing: -0.5px;
      }
    `}
    ${screens.phone`
      padding-top: 150px;
      padding-left: 50px;
      flex-basis: 70%;
      h1 {
        font-size: 3rem;
      }
    `}
    ${screens.smallPhone`
      flex-basis: 100%;
      align-items: center;
      padding-top: 30px;
      padding-left: 0;
      h1 {
        font-size: 3rem;
      }
    `}

    .get-started {
      background-color: #1f2c46;
      width: 200px;
      padding: 10px;
      color: #fff;
      border-radius: 3px;
      margin: 20px 0 3px 0;
      font-size: 0.8rem;
      &:hover {
        box-shadow: 0 15px 25px rgba(0, 99, 255, 0.2);
        transition: all 0.5s ease-out;
        cursor: pointer;
      }
    }
    .login {
      background-color: #f1f1f1;
      width: 100px;
      padding: 10px;
      color: #1f2c46;
      border: 1px solid rgba(108, 99, 255, 0.1);
      border-top: 1px solid #1f2c46;
      box-shadow: 0 0 16px rgba(108, 99, 255, 0.1);
      margin: 20px 0;
      font-size: 0.9rem;

      span {
        color: #1f2c46;
        font-size: 0.8rem;
      }
      &:hover {
        box-shadow: 0 5px 15px rgba(0, 99, 255, 0.2);
        transition: all 0.5s ease-out;
        cursor: pointer;
      }
    }
  }
`;
