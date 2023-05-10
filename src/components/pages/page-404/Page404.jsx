import { StyledPage404 } from './Page404.style';
import { Breadcrumbs } from '../../blocks/breadcrumbs/Breadcrumbs';

export const Page404 = () => {
  return (
    <StyledPage404>
      <Breadcrumbs></Breadcrumbs>
      <div>Страница не найдена</div>
    </StyledPage404>
  );
};
