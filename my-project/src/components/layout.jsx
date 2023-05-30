import React from 'react';
import { lazy, Suspense } from 'react';
import bgImg from '../images/backgroud.9fd313e8e07fb2ad255e.png';
const Header = lazy(() => import('./header/index'));
const Main = lazy(() => import('./main/index'));
const Footer = lazy(() => import('./footer/index'));
const ScrollPage = lazy(() => import('./scroll-page/index'));
function Layout() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        objectFit: 'cover',
      }}
    >
      <Suspense
        fallback={
          <div className='absolute text-4xl w-full h-full top-0 left-0 flex justify-center items-center'>
            ...Loading
          </div>
        }
      >
        <Header />
        <Main />
        <Footer />
        <ScrollPage />
      </Suspense>
    </div>
  );
}

export default Layout;
