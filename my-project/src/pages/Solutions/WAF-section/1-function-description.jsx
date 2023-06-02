import React from 'react';
import { useTranslation } from 'react-i18next';
function Description() {
  const { t } = useTranslation();
  return (
    <div className='container h-full mx-auto mt-32  pb-64 flex flex-col lg:flex-row items-stretch justify-between Up'>
      <h3 className='lg:w-1/2 text-xl text-center lg:text-start md:text-2xl lg:text-4xl text-blue font-bold'>
        {t('WAF.title1')}
      </h3>
      <p className='w-4/5 mx-auto lg:mx-0 lg:w-1/2 font-bold text-lg my-4 lg:my-0'>
        {t('WAF.content1')}
      </p>
    </div>
  );
}

export default Description;
