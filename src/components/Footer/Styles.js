import styled from 'styled-components';
import { screens } from '../../globals/styles';

export const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  background-color: rgba(108, 99, 255, 0.01);
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

    ${screens.tablet`
      .copyright {
        width: 60%;
        font-size: .8rem;
      }
    `}
    ${screens.phone`
      .copyright {
        width: 100%;
        font-size: .8rem;
      }
    `}
    ${screens.smallPhone`
      .copyright {
        font-size: .6rem;
      }
    `}
`;
