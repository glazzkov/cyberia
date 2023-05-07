import styled from 'styled-components';
import { headerDivider } from '../../../styled-mixins/headerDivider';

export const StyledHeaderContacts = styled.section`
  ${headerDivider}
  color: ${(props) => props.theme.colors.burger};
  font-size: 16px;
  line-height: 22px;
  display: flex;
  flex-direction: column;
  gap: 42px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 26.9835px;
    line-height: 37px;
  }

  @media ${(props) => props.theme.mediaQueries.desktop} {
    display: none;
  }
`;
