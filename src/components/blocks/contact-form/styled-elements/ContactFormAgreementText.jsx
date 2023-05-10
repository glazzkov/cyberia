import styled from 'styled-components';

export const ContactFormAgreementText = styled.p`
  max-width: 310px;
  font-size: 14px;
  line-height: 22px;

  @media ${(props) => props.theme.mediaQueries.mobileOnly} {
    display: none;
  }
`;
