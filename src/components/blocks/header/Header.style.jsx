import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${(props) => (props.open ? props.theme.colors.background_nav : props.theme.colors.background_main)};
  height: ${(props) => (props.open ? '100vh' : '68px')};
  position: sticky;
  left: 0;
  right: 0;
  top: ${(props) => (props.showOnScroll ? '0' : '-100%')};
  transition: 300ms;
  overflow-y: ${(props) => (props.open ? 'scroll' : 'visible')};
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${(props) => props.theme.mediaQueries.desktop} {
    height: ${(props) => '120px'};
    background-color: ${(props) => (props.inheritBackground ? 'inherit' : props.theme.colors.background_main)};
    overflow-y: visible;
  }

  @media ${(props) => props.theme.mediaQueries.tabletOnly} {
    position: ${(props) => (props.open ? 'fixed' : 'sticky')};
    box-shadow: ${(props) => props.theme.shadows.header};
  }
`;
