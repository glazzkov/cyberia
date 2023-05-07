import styled from 'styled-components';
import { container } from '../../../styled-mixins/container';

export const StyledHeaderInner = styled.div`
  ${container}
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;

  @media ${(props) => props.theme.mediaQueries.tabletOnly} {
    flex-direction: ${(props) => (props.open ? 'column' : 'row')};
    align-items: ${(props) => (props.open ? 'flex-start' : 'auto')};
  }
`;
