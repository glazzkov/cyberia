import { StyledPageFilter } from './PageFilter.style';
import { PageFilterItem } from './PageFilterItem';

export const PageFilter = ({ selectedFilterId, filters, callback, ...props }) => {
  return (
    <StyledPageFilter {...props}>
      {filters.map((filter) => {
        return (
          <PageFilterItem active={selectedFilterId === filter.id} key={filter.id} onClick={() => callback(filter.id)}>
            {filter.name}
          </PageFilterItem>
        );
      })}
    </StyledPageFilter>
  );
};
