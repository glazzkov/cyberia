import styled from 'styled-components';
import { container } from '../../styled-mixins/container';
import { StyledBreadcrumbs } from '../../blocks/breadcrumbs/Breadcrumbs.style';
import { PageTitle } from '../../blocks/page-title/PageTitle';

export const ProjectsPageInner = styled.div`
  ${container}
  padding-top: 26px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    padding-top: 90px;
  }

  @media ${(props) => props.theme.mediaQueries.desktop} {
    padding-top: 65px;
  }

  & ${StyledBreadcrumbs} {
    @media ${(props) => props.theme.mediaQueries.tablet} {
      margin-bottom: 57px;
    }

    @media ${(props) => props.theme.mediaQueries.desktop} {
      margin-bottom: 37px;
    }
  }

  & ${PageTitle} {
    @media ${(props) => props.theme.mediaQueries.tablet} {
      margin-bottom: 47px;
    }

    @media ${(props) => props.theme.mediaQueries.desktop} {
      margin-bottom: 39px;
    }
  }
`;
