import { StyledProjectsListItem } from './ProjectsListItem.style';
import { Link } from 'react-router-dom';

export const ProjectsListItem = ({ project }) => {
  return (
    <StyledProjectsListItem>
      <Link to={project.slug}>
        <img src={project.image} alt={`Обложка проекта '${project.title}'`} />
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </Link>
    </StyledProjectsListItem>
  );
};
