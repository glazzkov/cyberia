import { StyledHeaderLinks } from './HeaderLinks.style';
import { HeaderLinksItem } from '../header-links-item/HeaderLinksItem';

export const HeaderLinks = () => {
  return (
    <StyledHeaderLinks>
      <HeaderLinksItem to='/' hiddenOnDesktop>
        Главная
      </HeaderLinksItem>
      <HeaderLinksItem to='about' replace>
        О нас
      </HeaderLinksItem>
      <HeaderLinksItem to='catalog' replace>
        Услуги
      </HeaderLinksItem>
      <HeaderLinksItem to='projects' replace>
        Проекты
      </HeaderLinksItem>
      <HeaderLinksItem to='blog' replace>
        Блог
      </HeaderLinksItem>
      <HeaderLinksItem to='contacts' replace hiddenOnMobile>
        Контакты
      </HeaderLinksItem>
    </StyledHeaderLinks>
  );
};
