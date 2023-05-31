import React from 'react';
import { useTranslation } from 'react-i18next';
function Description() {
  const { t } = useTranslation();
  return (
    <div className='container h-full mx-auto mt-64 pb-64 flex items-stretch justify-between'>
      <h3 className='w-1/2 text-4xl text-blue font-bold'>{t('WAF.title1')}</h3>
      <p className='w-1/2 font-bold text-lg'>{t('WAF.content1')}</p>
    </div>
  );
}

export default Description;
