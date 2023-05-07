import { StyledLayout } from './Layout.style';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

import { handleScroll } from '../../../store/uiSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const scrollHandler = () => dispatch(handleScroll());
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [dispatch]);

  return (
    <StyledLayout>
      <Header />
      <Outlet />
      <Footer />
    </StyledLayout>
  );
};
