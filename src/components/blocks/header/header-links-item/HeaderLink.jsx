import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderLink = styled(Link)`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    transition: 200ms;
    height: 2px;
    bottom: -5px;
    left: 50%;
    right: 50%;
    background-color: ${(props) => props.theme.colors.accentPrimary_1};
    border-radius: 1px;
  }

  &:hover::after {
    left: -20px;
    right: -20px;
  }
`;
