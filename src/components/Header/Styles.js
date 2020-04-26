import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;

  .intro {
    flex-basis: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    padding-left: 120px;
    h1 {
      font-size: 4rem;
      color: #6c63ff;
    }

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
    .submit-comparison {
      background-color: #f1f1f1;
      width: 200px;
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

  .bg-header {
    align-self: center;
    height: 80%;
    flex-basis: 50%;
    margin-right: 60px;
    background-image: url('/undraw_file_sync_ot38.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
