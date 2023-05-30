import LazyLoad from 'react-lazyload';
import Header from './header/index';
import Main from './main/index';
import Footer from './footer/index';

export default function Home() {
  return (
    <>
      <LazyLoad offset={100} once>
        <Header />
      </LazyLoad>
      <LazyLoad offset={100} once>
        <Main />
      </LazyLoad>
      <LazyLoad offset={100} once>
        <Footer />
      </LazyLoad>
    </>
  );
}
