import styled from 'styled-components';

export const FooterCopyright = styled.ul`
  text-align: center;

  @media ${(props) => `${props.theme.mediaQueries.tablet} and ${props.theme.mediaQueries.tabletOnly}`} {
    font-size: 16px;
    line-height: 22px;
    flex-basis: 100%;
  }

  @media ${(props) => props.theme.mediaQueries.desktop} {
    max-width: 360px;
    text-align: start;
  }
`;
