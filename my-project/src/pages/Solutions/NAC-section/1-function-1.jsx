import React from 'react';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import accessImg from '../../../images/access/v2-nac-1.46f479e902710bf3fbb5.png';
function Function1() {
  const { t } = useTranslation();
  const function1 = [
    {
      content: t('NAC.content11'),
    },
    {
      content: t('NAC.content12'),
    },
    {
      content: t('NAC.content13'),
    },
    {
      content: t('NAC.content14'),
    },
    {
      content: t('NAC.content15'),
    },
    {
      content: t('NAC.content16'),
    },
    {
      content: t('NAC.content17'),
    },
    {
      content: t('NAC.content18'),
    },
    {
      content: t('NAC.content19'),
    },
    {
      content: t('NAC.content20'),
    },
    {
      content: t('NAC.content21'),
    },
    {
      content: t('NAC.content22'),
    },
    {
      content: t('NAC.content23'),
    },
    {
      content: t('NAC.content24'),
    },
  ];
  const contentFunction1 = function1.map((content, index) => {
    return (
      <li className='py-4 border-b border-b-gray' key={index}>
        <i className='fa fa-check-circle text-yellow mr-4'></i>
        {content.content}
      </li>
    );
  });
  return (
    <div className='container h-full mx-auto mt-32 flex flex-col justify-center items-center Up'>
      <h3 className='text-xl md:text-2xl lg:text-4xl text-blue font-bold'>
        {t('NAC.title1')}
      </h3>
      <ul
        className='p-12 my-12 rounded-2xl'
        style={{
          background:
            'linear-gradient(150deg,rgba(176, 176, 176, 0.2),rgba(103, 102, 102, 0.2))',
        }}
      >
        {contentFunction1}
      </ul>
      <LazyLoad className='w-1/2' offset={0} once>
        <img className='rounded-2xl Up' src={accessImg} alt='access-img' />
      </LazyLoad>
    </div>
  );
}

export default Function1;
