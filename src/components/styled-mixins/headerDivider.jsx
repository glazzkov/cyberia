import { css } from 'styled-components';

export const headerDivider = css`
  position: relative;

  &::after {
    @media ${(props) => props.theme.mediaQueries.tabletOnly} {
      content: '';
    }
    position: absolute;
    bottom: -50px;
    left: 0;
    right: 24px;
    background-color: ${(props) => props.theme.colors.background_main};
    height: 3px;
    border-radius: 2px;

    @media ${(props) => props.theme.mediaQueries.tablet} {
      bottom: -65px;
      right: 107px;
    }
  }
`;
