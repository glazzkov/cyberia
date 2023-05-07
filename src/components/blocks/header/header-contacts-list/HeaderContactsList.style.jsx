import styled from 'styled-components';

export const StyledHeaderContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    gap: 30px;
  }
`;
