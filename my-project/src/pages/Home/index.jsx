import LazyLoad from 'react-lazyload';
import Header from './header/index';
import Main from './main/index';

export default function Home() {
  return (
    <>
      <LazyLoad offset={0} once>
        <Header />
      </LazyLoad>
      <LazyLoad offset={0} once>
        <Main />
      </LazyLoad>
    </>
  );
}
