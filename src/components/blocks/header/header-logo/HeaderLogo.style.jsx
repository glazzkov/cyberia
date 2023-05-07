import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeaderLogo = styled(Link)`
  width: 92px;
  display: flex;
  color: ${(props) => props.theme.colors.accentPrimary_1};
  transition: 200ms;

  &:hover,
  &:active,
  &:focus {
    color: ${(props) => props.theme.colors.accentPrimary_2};
  }

  @media (${(props) => props.theme.mediaQueries.tablet}) {
    width: 140px;
  }

  @media (${(props) => props.theme.mediaQueries.desktop}) {
    width: 131px;
  }

  @media ${(props) => props.theme.mediaQueries.tabletOnly} {
    display: ${(props) => (props.open ? 'none' : 'flex')};
  }
`;
