import React from 'react';
import LazyLoad from 'react-lazyload';
import img1 from '../../../images/gallery/header-1.e29951c6bf7cdf15c303.png';
import img2 from '../../../images/gallery/header-2.15fda7c06337e76eaeb0.png';
import img3 from '../../../images/gallery/header-6.987988888e628d2df2fd.png';
import img4 from '../../../images/gallery/header-7.c4c8a78b8f66aa9524dd.png';
import { useTranslation } from 'react-i18next';
function Gallery() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  return (
    <section className='container m-auto bg-white text-darkBlue rounded-2xl my-12'>
      <LazyLoad {...lazyLoadOptions}>
        <h1 className='underline text-center text-xl md:text-2xl font-bold pt-8 px-4 Scale'>
          {t('gallery')}
        </h1>
      </LazyLoad>
      <LazyLoad {...lazyLoadOptions}>
        <div className='flex-col lg:flex-row flex flex-wrap items-center p-8'>
          <LazyLoad
            className='gallery w-4/5 m-auto lg:w-1/2 lg:m-0 px-4 py-8 lg:p-8 Scale'
            {...lazyLoadOptions}
          >
            <img src={img1} alt={img1} />
          </LazyLoad>
          <LazyLoad
            className='gallery  w-4/5 m-auto lg:w-1/2 lg:m-0 px-4 py-8 lg:p-8 Scale'
            {...lazyLoadOptions}
          >
            <img src={img2} alt={img2} />
          </LazyLoad>
          <LazyLoad
            className='gallery  w-4/5 m-auto lg:w-1/2 lg:m-0 px-4 py-8 lg:p-8 Scale'
            {...lazyLoadOptions}
          >
            <img src={img3} alt={img3} />
          </LazyLoad>
          <LazyLoad
            className='gallery  w-4/5 m-auto lg:w-1/2 lg:m-0 px-4 py-8 lg:p-8 Scale'
            {...lazyLoadOptions}
          >
            <img src={img4} alt={img4} />
          </LazyLoad>
        </div>
      </LazyLoad>
    </section>
  );
}

export default Gallery;
