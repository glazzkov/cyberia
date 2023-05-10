import styled from 'styled-components';
import { container } from '../../../styled-mixins/container';

export const ContactFormInner = styled.div`
  ${container}
  padding-top: 67px;
  padding-bottom: 74px;
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media ${(props) => `${props.theme.mediaQueries.tablet} and ${props.theme.mediaQueries.tabletOnly}`} {
    padding: 122px 182px 166px;
  }

  @media ${(props) => props.theme.mediaQueries.desktop} {
    padding-top: 95px;
    padding-bottom: 95px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
