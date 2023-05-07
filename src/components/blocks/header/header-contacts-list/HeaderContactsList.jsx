import { StyledHeaderContactsList } from './HeaderContactsList.style';

export const HeaderContactsList = () => {
  return (
    <StyledHeaderContactsList>
      <li>
        <a href='tel:+74996794579'>+7 499 679 45 79</a>
      </li>
      <li>
        <a href='hello@cyberia.ru'>hello@cyberia.ru</a>
      </li>
      <li>
        <address>Аносова 3Б, оф. 1</address>
      </li>
    </StyledHeaderContactsList>
  );
};
