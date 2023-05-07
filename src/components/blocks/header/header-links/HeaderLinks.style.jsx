import styled from 'styled-components';
import { headerDivider } from '../../../styled-mixins/headerDivider';

export const StyledHeaderLinks = styled.ul`
  display: flex;
  font-size: 18px;
  line-height: 25px;
  flex-direction: column;
  gap: 30px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 30px;
    line-height: 41px;
    gap: 80px;
  }

  @media ${(props) => props.theme.mediaQueries.desktop} {
    flex-direction: row;
    gap: 115px;
    font-size: 18px;
    line-height: 21px;
    font-weight: 300;
    font-family: ${(props) => props.theme.fontFamily.primary};
  }

  ${headerDivider}
`;
