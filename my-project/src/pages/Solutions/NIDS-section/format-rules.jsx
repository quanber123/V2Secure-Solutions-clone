import React from 'react';
import { useTranslation } from 'react-i18next';

function FormatRules() {
  const { t } = useTranslation();
  const formatRules = [
    {
      content: t('NIDS.content20'),
    },
    {
      content: t('NIDS.content21'),
    },
    {
      content: t('NIDS.content22'),
    },
    {
      content: t('NIDS.content23'),
    },
  ];
  const contentFormatRules = formatRules.map((content, index) => {
    return (
      <li className='py-4' key={index}>
        <i className='fa fa-check-circle text-yellow mr-4'></i>
        {content.content}
      </li>
    );
  });
  return (
    <div className='px-18 xl:px-32 Right'>
      <h3 className='my-8 text-4xl text-center text-blue font-bold'>
        {t('NIDS.title5')}
      </h3>
      <ul>{contentFormatRules}</ul>
    </div>
  );
}

export default FormatRules;
