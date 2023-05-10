import styled from 'styled-components';

export const ContactFormAgreementBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  & button {
    flex-grow: 2;
  }

  @media ${(props) => props.theme.mediaQueries.mobileOnly} {
    margin-top: 20px;
  }
`;
