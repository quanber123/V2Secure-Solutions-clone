import React from 'react';
import { useTranslation } from 'react-i18next';

function Security() {
  const { t } = useTranslation();
  const security = [
    {
      content: t('WAF.content9'),
    },
    {
      content: t('WAF.content10'),
    },
    {
      content: t('WAF.content11'),
    },
    {
      content: t('WAF.content12'),
    },
    {
      content: t('WAF.content13'),
    },
    {
      content: t('WAF.content14'),
    },
    {
      content: t('WAF.content15'),
    },
    {
      content: t('WAF.content16'),
    },
    {
      content: t('WAF.content17'),
    },
    {
      content: t('WAF.content18'),
    },
    {
      content: t('WAF.content19'),
    },
    {
      content: t('WAF.content21'),
    },
    {
      content: t('WAF.content22'),
    },
    {
      content: t('WAF.content23'),
    },
    {
      content: t('WAF.content24'),
    },
  ];
  const contentSecurity = security.map((content, index) => {
    return (
      <p className='my-8 lg:mx-4' key={index}>
        <i className='fa fa-star mr-4 text-sm'></i>
        {content.content}
      </p>
    );
  });
  return (
    <div className='h-full bg-blue text-white rounded-tr-2xl p-4 lg:p-8 Right'>
      <h3 className='text-xl md:text-2xl font-bold lg:pl-3'>
        {t('WAF.title3')}
      </h3>
      <div className='text-lg md:text-xl'>{contentSecurity}</div>
    </div>
  );
}

export default Security;
