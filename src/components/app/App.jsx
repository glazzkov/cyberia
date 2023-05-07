import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { themes } from '../../themes/themes';
import { Provider } from 'react-redux';
import { Layout } from '../blocks/layout/Layout';
import { StyledApp } from './App.style';
import store from '../../store/store';
import { ProjectsPage } from '../pages/projects-page/ProjectsPage';
import { Page404 } from '../pages/page-404/Page404';

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={themes.default}>
          <GlobalStyle />
          <StyledApp>
            <Routes>
              <Route path='/' element={<Layout />}>
                {/* т.к. необходимо реализовать только страницу с проектами, в качестве индексной страницы указана страница 404 */}
                <Route index element={<Page404 />}></Route>
                <Route path='projects' element={<ProjectsPage />}></Route>
                <Route path='*' element={<Page404 />}></Route>
              </Route>
            </Routes>
          </StyledApp>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};
