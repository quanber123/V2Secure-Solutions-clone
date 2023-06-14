import React from 'react';
import LazyLoad from 'react-lazyload';
import logImg from '../../../images/information/v2-siem-1.34657cc7dee593f2419b.png';
import { useTranslation } from 'react-i18next';
function InputAnalysis() {
  const { t } = useTranslation();
  const inputAnalysis = [
    {
      id: 1,
      content: t('DIPS.content6'),
    },
    {
      id: 2,
      content: t('DIPS.content7'),
    },
    {
      id: 3,
      content: t('DIPS.content8'),
    },
  ];
  const contentInputAnalysis = inputAnalysis.map((content, index) => {
    return (
      <li className='py-4 border-b border-b-gray' key={index}>
        <i className='fa fa-check-circle text-yellow mr-4'></i>
        {content.content}
      </li>
    );
  });
  return (
    <section className='container h-full mx-auto mt-32 flex flex-col lg:flex-row items-stretch justify-between Up'>
      <div className='lg:w-1/2'>
        <h3 className='my-8 lg:my-0 text-lg md:text-2xl lg:text-4xl text-center lg:text-start text-blue font-bold'>
          {t('DIPS.title2')}
        </h3>
        <LazyLoad offset={100} once>
          <img
            className='lg:w-2/3 mt-32 mx-auto lg:mx-0 Up'
            src={logImg}
            alt={logImg}
          />
        </LazyLoad>
      </div>
      <div
        className='lg:w-1/2 h-full p-12 rounded-2xl'
        style={{
          background:
            'linear-gradient(150deg,rgba(176, 176, 176, 0.2),rgba(103, 102, 102, 0.2))',
        }}
      >
        <ul>{contentInputAnalysis}</ul>
      </div>
    </section>
  );
}
export default InputAnalysis;
