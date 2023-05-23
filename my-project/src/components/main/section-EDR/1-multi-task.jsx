import React from 'react';
import LazyLoad from 'react-lazyload';
import solutionImg from '../../../images/solutions/v2-edr-1.d84249ea80b417e86620.png';
import { useTranslation } from 'react-i18next';
function MultiTask() {
  const { t } = useTranslation();
  const terminal = [
    {
      content: t('EDR.content1'),
    },
    {
      content: t('EDR.content2'),
    },
    {
      content: t('EDR.content3'),
    },
    {
      content: t('EDR.content4'),
    },
  ];
  const behavioral = [
    {
      content: t('EDR.content5'),
    },
    {
      content: t('EDR.content6'),
    },
    {
      content: t('EDR.content7'),
    },
  ];
  const malware = [
    {
      content: t('EDR.content8'),
    },
    {
      content: t('EDR.content9'),
    },
    {
      content: t('EDR.content10'),
    },
    {
      content: t('EDR.content11'),
    },
    {
      content: t('EDR.content12'),
    },
  ];
  const information = [
    {
      content: t('EDR.content13'),
    },
    {
      content: t('EDR.content14'),
    },
    {
      content: t('EDR.content15'),
    },
    {
      content: t('EDR.content16'),
    },
    {
      content: t('EDR.content17'),
    },
    {
      content: t('EDR.content18'),
    },
    {
      content: t('EDR.content19'),
    },
    {
      content: t('EDR.content20'),
    },
  ];
  const contentTerminal = terminal.map((content, index) => {
    return (
      <p className='my-4' key={index}>
        {content.content}
      </p>
    );
  });
  const contentBehavioral = behavioral.map((content, index) => {
    return (
      <p className='my-4' key={index}>
        {content.content}
      </p>
    );
  });
  const contentMalware = malware.map((content, index) => {
    return (
      <p className='my-4' key={index}>
        {content.content}
      </p>
    );
  });
  const contentInformation = information.map((content, index) => {
    return (
      <p className='my-4' key={index}>
        {content.content}
      </p>
    );
  });
  return (
    <div className='px-8 pt-8'>
      <div className='relative'>
        <h3 className='text-2xl font-bold mb-2 md:mx-12 Scale'>
          {t('EDR.title1')}
        </h3>
        <LazyLoad
          className='absolute z-50 w-full h-full top-0 left-0 m-auto flex justify-center items-center'
          offset={100}
          once
        >
          <img className='lg:h-full' src={solutionImg} alt={solutionImg} />
        </LazyLoad>
        <div className='flex flex-wrap items-stretch'>
          <div className='multi-task-content text-xl border border-darkBlue rounded-xl mb-8 Scale'>
            <h4 className='font-semibold text-center'>{t('EDR.idea1')}</h4>
            <div>{contentTerminal}</div>
          </div>
          <div className='multi-task-content text-xl border border-darkBlue rounded-xl p-4mb-8 Scale'>
            <h4 className='font-semibold text-center'>{t('EDR.idea2')}</h4>
            <div>{contentBehavioral}</div>
          </div>
          <div className='multi-task-content text-xl border border-darkBlue rounded-xl p-4 Scale'>
            <h4 className='font-semibold text-center'>{t('EDR.idea3')}</h4>
            <div>{contentMalware}</div>
          </div>
          <div className='multi-task-content text-xl border border-darkBlue rounded-xl p-4 Scale'>
            <h4 className='font-semibold text-center'>{t('EDR.idea4')}</h4>
            <div>{contentInformation}</div>
          </div>
        </div>
      </div>
      <div className='text-xl p-8 mx-4 Scale'>
        <p>{t('EDR.content21')}</p>
      </div>
    </div>
  );
}

export default MultiTask;
