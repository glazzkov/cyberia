import styled from 'styled-components';

export const StyledHeaderLinksItem = styled.li`
  @media ${(props) => props.theme.mediaQueries.tabletOnly} {
    display: ${(props) => (props.hiddenOnMobile ? 'none' : 'auto')};
  }

  @media ${(props) => props.theme.mediaQueries.desktop} {
    display: ${(props) => (props.hiddenOnDesktop ? 'none' : 'auto')};
  }
`;
