import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFooterLogo = styled(Link)`
  width: 102px;
  display: flex;
  color: ${(props) => props.theme.colors.accentPrimary_3};
  transition: 200ms;

  &:hover,
  &:active,
  &:focus {
    color: ${(props) => props.theme.colors.accentPrimary_1};
  }

  @media (${(props) => props.theme.mediaQueries.tablet}) {
    width: 196px;
  }
`;
