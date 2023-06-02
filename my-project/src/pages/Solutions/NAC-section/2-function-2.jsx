import React from 'react';
import LazyLoad from 'react-lazyload';
import function2Img from '../../../images/access/v2-nac-2.d2d5178610158a722098.png';
import { useTranslation } from 'react-i18next';
function Function2() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };
  return (
    <div className='container m-auto'>
      <div className='flex flex-col lg:flex-row justify-between pb-64 Right'>
        <div className='lg:w-1/2 flex flex-col'>
          <h3 className='text-xl md:text-2xl lg:text-4xl text-center lg:text-start text-blue font-bold'>
            {t('NAC.title2')}
          </h3>
          <LazyLoad
            className='w-1/3 m-auto lg:w-auto lg:m-0'
            {...lazyLoadOptions}
          >
            <img
              className='mt-8 lg:mt-32 Right'
              src={function2Img}
              alt='function2-img'
            />
          </LazyLoad>
        </div>
        <div className='lg:w-1/2'>
          <ul>
            <li className='flex py-8 border-b border-b-gray'>
              <div className='bg-yellow text-black text-xl text-center w-14 h-14 p-2 mr-4 rounded-md flex justify-center items-center'>
                01
              </div>
              <p className='w-11/12 ml-auto'>{t('NAC.content1')}</p>
            </li>
            <li className='flex py-8 border-b border-b-gray'>
              <div className='bg-yellow text-black text-xl text-center w-14 h-14 p-2 mr-4 rounded-md flex justify-center items-center'>
                02
              </div>
              <p className='w-11/12 ml-auto'>{t('NAC.content2')}</p>
            </li>
            <li className='flex py-8 border-b border-b-gray'>
              <div className='bg-yellow text-black text-xl text-center w-14 h-14 p-2 mr-4 rounded-md flex justify-center items-center'>
                03
              </div>
              <p className='w-11/12 ml-auto'>{t('NAC.content3')}</p>
            </li>
            <li className='flex py-8 border-b border-b-gray'>
              <div className='bg-yellow text-black text-xl text-center w-14 h-14 p-2 mr-4 rounded-md flex justify-center items-center'>
                04
              </div>
              <p className='w-11/12 ml-auto'>{t('NAC.content4')}</p>
            </li>
          </ul>
        </div>
      </div>
      <h3 className='text-xl md:text-2xl lg:text-4xl text-center text-blue font-bold py-8 Scale'>
        {t('NAC.content5')}
      </h3>
      <ul className='font-bold md:text-lg Left'>
        <li className='py-4 border-b border-b-gray flex'>
          {t('NAC.content6')}
          <i className='fa fa-check text-green ml-auto'></i>
        </li>
        <li className='py-4 border-b border-b-gray flex'>
          {t('NAC.content7')}
          <i className='fa fa-check text-green ml-auto'></i>
        </li>
        <li className='py-4 border-b border-b-gray flex'>
          {t('NAC.content18')}
          <i className='fa fa-check text-green ml-auto'></i>
        </li>
        <li className='py-4 border-b border-b-gray flex'>
          {t('NAC.content9')}
          <i className='fa fa-check text-green ml-auto'></i>
        </li>
        <li className='py-4 border-b border-b-gray flex'>
          {t('NAC.content10')}
          <i className='fa fa-check text-green ml-auto'></i>
        </li>
      </ul>
    </div>
  );
}

export default Function2;
