import { StyledProjectsPage } from './ProjectsPage.style';
import { Breadcrumbs } from '../../blocks/breadcrumbs/Breadcrumbs';
import { PageTitle } from '../../blocks/page-title/PageTitle';
import { fetchProjects, fetchProjectCategories } from '../../../store/api';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setFilterCategoryId } from '../../../store/projectsSlice';
import { projectCategoriesSelectors } from '../../../store/projectsSlice';
import { PageFilter } from '../../blocks/page-filter/PageFilter';
import { ProjectsPageInner } from './ProjectsPageInner';
import { ProjectsList } from '../../blocks/projects-list/ProjectsList';
import { ContactForm } from '../../blocks/contact-form/ContactForm';

export const ProjectsPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(projectCategoriesSelectors.selectAll);
  const selectedFilterId = useSelector((state) => state.projects.categories.selectedCategoryId);

  const handleFilterChange = (filterId) => {
    dispatch(setFilterCategoryId(filterId));
  };

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchProjectCategories());
  }, [dispatch]);

  return (
    <StyledProjectsPage>
      <ProjectsPageInner>
        <Breadcrumbs></Breadcrumbs>
        <PageTitle>Проекты</PageTitle>
        <PageFilter filters={filters} selectedFilterId={selectedFilterId} callback={handleFilterChange} aria-label='Фильтр проектов'></PageFilter>
        <ProjectsList></ProjectsList>
      </ProjectsPageInner>
      <ContactForm>form</ContactForm>
    </StyledProjectsPage>
  );
};
