import LazyLoad from 'react-lazyload';
import Header from './header/index';
import Main from './main/index';

export default function Home() {
  return (
    <>
      <LazyLoad offset={100} once>
        <Header />
      </LazyLoad>
      <LazyLoad offset={100} once>
        <Main />
      </LazyLoad>
    </>
  );
}
