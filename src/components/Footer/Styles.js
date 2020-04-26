import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  background-color: rgba(108, 99, 255, 0.04);
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .copyright {
    border-top: 1px solid rgba(108, 99, 255, 0.2);
    padding: 20px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    span {
      color: darkred;
    }
  }
`;
