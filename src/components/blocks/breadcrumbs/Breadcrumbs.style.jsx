import styled from 'styled-components';

export const StyledBreadcrumbs = styled.ul`
  display: flex;
  color: ${(props) => props.theme.colors.accentSecondary};
  font-size: 12px;
  line-height: 14px;
  padding: 10px 0;
  font-weight: 300;
  font-family: ${(props) => props.theme.fontFamily.primary};

  @media ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 18px;
    line-height: 21px;
  }

  & li {
    &:last-child {
      color: ${(props) => props.theme.colors.accentSecondary_disabled};
    }

    & a {
      position: relative;
    }

    &:not(:last-child) a::before {
      content: '';
      position: absolute;
      height: 1px;
      transition: 100ms;
      background-color: currentColor;
      bottom: 0;
      left: 0;
      right: 100%;
    }

    &:not(:last-child) a:hover::before {
      right: 0;
    }

    &:not(:last-child)::after {
      content: '/';
      margin: 5px;
    }
  }
`;
