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
      <li className='py-4 border-b border-b-gray flex' key={index}>
        <p>{content.content}</p>
        <i className='fa fa-check text-green ml-auto'></i>
      </li>
    );
  });
  return (
    <div className='container m-auto Up'>
      <h3 className='w-4/5 m-auto py-12 text-xl md:text-2xl lg:text-4xl text-center text-blue font-bold border-t border-t-gray'>
        {t('WAF.title3')}
      </h3>
      <ul className='w-5/6 lg:w-2/3 m-auto font-bold'>{contentSecurity}</ul>
    </div>
  );
}

export default Security;
