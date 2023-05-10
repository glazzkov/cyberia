import { StyledProjectsList } from './ProjectsList.style';
import { projectsSelectors } from '../../../store/projectsSlice';
import { useSelector } from 'react-redux';
import { ProjectsListItem } from '../projects-list-item/ProjectsListItem';

export const ProjectsList = () => {
  const selectedFilterId = useSelector((store) => store.projects.categories.selectedCategoryId);
  const projects = useSelector(projectsSelectors.selectAll);
  const filteredProjects = !selectedFilterId
    ? projects
    : projects.filter((project) => {
        return !!project.categories.find((category) => category.id === selectedFilterId);
      });

  return (
    <StyledProjectsList aria-label='Список проектов'>
      {filteredProjects.map((project) => (
        <ProjectsListItem key={project.id} project={project}></ProjectsListItem>
      ))}
    </StyledProjectsList>
  );
};
