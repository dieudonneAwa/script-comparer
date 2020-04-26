import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 80vh;
  display: flex;

  .intro {
    flex-basis: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    padding-left: 200px;
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
    }
    .submit-comparison {
      background-color: #f1f1f1;
      width: 200px;
      padding: 10px;
      color: #000;
      border: none;
      border-top: 1px solid #1f2c46;
      margin: 20px 0;

      span {
        color: #1f2c46;
        font-size: 0.9rem;
        font-size: 0.8rem;
      }
    }
  }

  .bg-header {
    align-self: center;
    height: 80%;
    flex-basis: 50%;
    background-image: url('/undraw_file_sync_ot38.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
