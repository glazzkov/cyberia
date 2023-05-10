import styled from 'styled-components';

export const FooterHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${(props) => props.theme.mediaQueries.mobileOnly} {
    align-items: center;
    text-align: center;
  }

  @media ${(props) => props.theme.mediaQueries.tablet} {
    gap: 27px;
  }

  @media ${(props) => props.theme.mediaQueries.desktop} {
    gap: 13px;
  }
`;
