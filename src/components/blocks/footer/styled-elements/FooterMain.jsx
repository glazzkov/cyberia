import styled from 'styled-components';

export const FooterMain = styled.div`
  display: flex;
  gap: 40px;
  flex-grow: 5;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    gap: 65px;
  }

  @media ${(props) => props.theme.mediaQueries.desktop} {
    gap: 90px;
  }
`;
