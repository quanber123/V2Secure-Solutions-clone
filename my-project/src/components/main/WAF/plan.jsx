import React from 'react';
import LazyLoad from 'react-lazyload';
import planImg from '../../../images/application/v2-waf-2.9e1733d2be88b2a28b46.png';
import { useTranslation } from 'react-i18next';
function Plan() {
  const { t } = useTranslation();
  const plan = [
    {
      content: t('WAF.content2'),
    },
    {
      content: t('WAF.content3'),
    },
    {
      content: t('WAF.content4'),
    },
    {
      content: t('WAF.content5'),
    },
  ];
  const contentPlan = plan.map((content, index) => {
    return (
      <p className='m-4' key={index}>
        <i className='fa fa-circle mr-4 text-sm text-blue'></i>
        {content.content}
      </p>
    );
  });
  return (
    <div className='text-darkBlue'>
      <h3 className='text-xl font-bold px-3 mx-4'>{t('WAF.title2')}</h3>
      <div className='text-lg px-3 py-4'>{contentPlan}</div>
      <LazyLoad
        className='flex items-center justify-center w-full p-4'
        offset={100}
        once
      >
        <img className='w-full' src={planImg} alt={planImg} />
      </LazyLoad>
    </div>
  );
}

export default Plan;
