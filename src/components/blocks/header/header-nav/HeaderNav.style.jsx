import styled from 'styled-components';

export const StyledHeaderNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media ${(props) => props.theme.mediaQueries.tabletOnly} {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    padding: 135px 0px;
    width: 100%;
    gap: 115px;
  }

  @media ${(props) => props.theme.mediaQueries.mobileOnly} {
    padding: 52px 0;
    gap: 87px;
  }

  @media ${(props) => props.theme.mediaQueries.desktop} {
    flex-direction: row;
  }
`;
