import LazyLoad from 'react-lazyload';
import OurServices from './section-our-services';
import OurSolutions from './section-our-solutions/index';
// import Gallery from './section-gallery';
function Main() {
  return (
    <main id='our-services'>
      <LazyLoad className='pb-32' offset={0} once>
        <OurServices />
      </LazyLoad>
      <LazyLoad className='pb-32' offset={0} once>
        <OurSolutions />
      </LazyLoad>
    </main>
  );
}

export default Main;
