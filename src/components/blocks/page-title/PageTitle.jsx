import styled from 'styled-components';

export const PageTitle = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 38px;
    line-height: 45px;
  }
`;
