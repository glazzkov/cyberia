import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  padding: 15px 20px;
  border: none;
  border-radius: 35px;
  color: ${(props) => props.theme.colors.text_invert};
  background-color: ${(props) => props.theme.colors.accentPrimary_1};
  position: relative;
  overflow: hidden;
  font-size: 13px;
  line-height: 18px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 16px;
    line-height: 22px;
    text-transform: uppercase;
  }

  @media ${(props) => props.theme.mediaQueries.desktop} {
    font-weight: 300;
    font-size: 13px;
    line-height: 18px;
  }

  & span {
    position: relative;
  }

  &::before {
    content: '';
    position: absolute;
    background: linear-gradient(0deg, #0359f3, #0359f3), #0359f3;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: 300ms;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }

  @media ${(props) => props.theme.mediaQueries.tablet} {
    padding: 18px 30px;
  }

  @media ${(props) => props.theme.mediaQueries.desktop} {
    padding: 20px 35px;
  }
`;
