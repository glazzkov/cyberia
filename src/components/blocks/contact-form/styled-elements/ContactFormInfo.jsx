import styled from 'styled-components';
import formDecorationIcon from '../../../../assets/icons/form-decoration-icon.svg';

export const ContactFormInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 31px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
  }

  &::before {
    content: '';
    width: 72px;
    height: 69px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    background-image: url(${formDecorationIcon});

    @media ${(props) => props.theme.mediaQueries.tablet} {
      width: 156px;
      height: 144px;
    }
  }
`;
