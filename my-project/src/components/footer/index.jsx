// import SectionContact from './section-contact';
import SectionAbout from './section-about';
import SectionCopyRight from './copyright';
import LazyLoad from 'react-lazyload';
function Footer() {
  return (
    <footer>
      {/* <LazyLoad offset={0} once>
        <SectionContact />
      </LazyLoad> */}
      <LazyLoad offset={0} once>
        <SectionAbout />
      </LazyLoad>
      <LazyLoad offset={0} once>
        <SectionCopyRight />
      </LazyLoad>
    </footer>
  );
}

export default Footer;
