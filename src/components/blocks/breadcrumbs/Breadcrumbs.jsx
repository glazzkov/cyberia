import { useLocation } from 'react-router-dom';
import { StyledBreadcrumbs } from './Breadcrumbs.style';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Breadcrumbs = () => {
  const location = useLocation();
  const navigation = useSelector((store) => store.navigation);
  const paths = location.pathname.trim('/').split('/');
  const pathNames = paths.map((path, index) => {
    if (path === '' && index === 0) return { id: 'main', name: 'Главная' };
    if (path === '') return null;
    if (navigation[path]) return { id: path, name: navigation[path].name };
    return { id: path, name: path };
  });

  return (
    <StyledBreadcrumbs>
      {pathNames.map(
        (pathName) =>
          !!pathName && (
            <li key={pathName.id}>
              <Link>{pathName.name}</Link>
            </li>
          )
      )}
    </StyledBreadcrumbs>
  );
};
