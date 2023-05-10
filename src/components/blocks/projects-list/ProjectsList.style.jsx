import styled from 'styled-components';

export const StyledProjectsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 56px;
  padding-bottom: 31px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 22px 24px;
    padding-top: 83px;
    padding-bottom: 213px;
  }

  @media ${(props) => props.theme.mediaQueries.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 42px 40px;
    padding-top: 150px;
    padding-bottom: 414px;
  }
`;
