import React from 'react';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';

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
      <p className='my-4 mx-4' key={index}>
        <i className='fa fa-star mr-4 text-sm'></i>
        {content.content}
      </p>
    );
  });
  return (
    <LazyLoad offset={0} once>
      <div className='h-full text-darkBlue md:p-8 Left'>
        <LazyLoad offset={0} once>
          <h3 className='text-lg md:text-2xl font-bold pl-3 Left'>
            {t('NAC.title1')}
          </h3>
        </LazyLoad>
        <LazyLoad offset={0} once>
          <div className='text-base md:text-xl Left'>{contentFunction1}</div>
        </LazyLoad>
      </div>
    </LazyLoad>
  );
}

export default Function1;
