import React from 'react';
import wafImg from '../../../images/application/v2-waf-1.6c6e603ebe6c82ee7b59.png';
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
function Description() {
  const { t } = useTranslation();
  return (
    <div className='p-8 Left'>
      <h3 className='text-xl md:text-2xl font-bold my-2'>{t('WAF.title1')}</h3>
      <p className='leading-7 text-lg md:text-xl'>{t('WAF.content1')}</p>
      <LazyLoad
        className='flex items-center justify-center p-4'
        offset={100}
        once
      >
        <img src={wafImg} alt={wafImg} />
      </LazyLoad>
    </div>
  );
}

export default Description;
