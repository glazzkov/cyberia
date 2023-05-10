import styled from 'styled-components';
import { container } from '../../../styled-mixins/container';

export const FooterInner = styled.div`
  ${container}
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media ${(props) => props.theme.mediaQueries.mobileOnly} {
    align-items: center;
  }

  @media ${(props) => props.theme.mediaQueries.tablet} {
    padding-top: 80px;
    padding-bottom: 80px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 55px 110px;
    justify-content: space-between;
  }

  @media ${(props) => props.theme.mediaQueries.desktop} {
    padding-top: 130px;
    padding-bottom: 170px;
    gap: 130px;
  }
`;
