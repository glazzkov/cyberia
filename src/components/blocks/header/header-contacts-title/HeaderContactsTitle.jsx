import styled from 'styled-components';

export const HeaderContactsTitle = styled.h3`
  font-size: 18px;
  line-height: 25px;
  font-weight: 400;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 30px;
    line-height: 41px;
  }
`;
