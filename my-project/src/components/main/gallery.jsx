import React from 'react';
import LazyLoad from 'react-lazyload';
import img1 from '../../images/gallery/header-1.e29951c6bf7cdf15c303.png';
import img2 from '../../images/gallery/header-2.15fda7c06337e76eaeb0.png';
import img3 from '../../images/gallery/header-6.987988888e628d2df2fd.png';
import img4 from '../../images/gallery/header-7.c4c8a78b8f66aa9524dd.png';
import { useTranslation } from 'react-i18next';
function Gallery() {
  const { t } = useTranslation();
  return (
    <section className='container m-auto bg-white text-darkBlue rounded-2xl my-12'>
      <h1 className='underline text-center text-2xl font-bold pt-8 px-4'>
        {t('gallery')}
      </h1>
      <div className='md:flex flex-wrap items-center p-8'>
        <LazyLoad className='gallery md:w-1/2 p-8' offset={100} once>
          <img src={img1} alt={img1} />
        </LazyLoad>
        <LazyLoad className='gallery md:w-1/2 p-8' offset={100} once>
          <img src={img2} alt={img2} />
        </LazyLoad>
        <LazyLoad className='gallery md:w-1/2 p-8' offset={100} once>
          <img src={img3} alt={img3} />
        </LazyLoad>
        <LazyLoad className='gallery md:w-1/2 p-8' offset={100} once>
          <img src={img4} alt={img4} />
        </LazyLoad>
      </div>
    </section>
  );
}

export default Gallery;
