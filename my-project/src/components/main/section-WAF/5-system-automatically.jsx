import React from 'react';
import { useTranslation } from 'react-i18next';

function PreventAttacks() {
  const { t } = useTranslation();
  const preventAttacks = [
    {
      content: t('WAF.content25'),
    },
    {
      content: t('WAF.content26'),
    },
    {
      content: t('WAF.content27'),
    },
  ];
  const contentPreventAttacks = preventAttacks.map((content, index) => {
    return (
      <p className='m-4' key={index}>
        {content.content}
      </p>
    );
  });
  return (
    <div className='text-darkBlue Left'>
      <h3 className='text-xl font-bold px-3 mx-4'>{t('WAF.title5')}</h3>
      <div className='text-lg px-3 py-4'>{contentPreventAttacks}</div>
    </div>
  );
}

export default PreventAttacks;
