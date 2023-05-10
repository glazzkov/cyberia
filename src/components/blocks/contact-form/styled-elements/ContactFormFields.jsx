import styled from 'styled-components';

export const ContactFormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    gap: 30px;
  }

  @media ${(props) => props.theme.mediaQueries.desktop} {
    padding-top: 20px;
  }
`;
