import styled from 'styled-components';

export const StyledPageFilter = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 17px 8px;
  padding: 10px 0;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0;
  }

  @media ${(props) => props.theme.mediaQueries.desktop} {
    gap: 20px 120px;
  }
`;
