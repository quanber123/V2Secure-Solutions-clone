import React from 'react';
import LazyLoad from 'react-lazyload';
import solutionImg from '../../../images/solutions/v2-edr-1.d84249ea80b417e86620.png';
import { useTranslation } from 'react-i18next';
function MultiTask() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
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
      <li className='py-4 border-b border-b-gray' key={index}>
        <i className='fa fa-check-circle text-yellow mr-4'></i>
        {content.content}
      </li>
    );
  });
  const contentBehavioral = behavioral.map((content, index) => {
    return (
      <li className='py-4 border-b border-b-gray' key={index}>
        <i className='fa fa-check-circle text-yellow mr-4'></i>
        {content.content}
      </li>
    );
  });
  const contentMalware = malware.map((content, index) => {
    return (
      <li className='py-4 border-b border-b-gray' key={index}>
        <i className='fa fa-check-circle text-yellow mr-4'></i>
        {content.content}
      </li>
    );
  });
  const contentInformation = information.map((content, index) => {
    return (
      <li className='py-4 border-b border-b-gray' key={index}>
        <i className='fa fa-check-circle text-yellow mr-4'></i>
        {content.content}
      </li>
    );
  });
  return (
    <div className='container mx-auto mt-32 Up'>
      <div className='relative'>
        <h3 className='text-xl md:text-2xl lg:text-4xl text-center lg:text-start text-blue font-bold mb-8'>
          {t('EDR.title1')}
        </h3>
        <LazyLoad
          className='hidden  absolute z-50 w-full h-full -top-42  md:-top-14 xl:-top-8 left-0 m-auto md:flex justify-center items-center'
          {...lazyLoadOptions}
        >
          <img className='xl:h-5/6 Up' src={solutionImg} alt={solutionImg} />
        </LazyLoad>
        <div className='flex flex-col lg:flex-row flex-wrap items-stretch'>
          <div
            className='multi-task-content rounded-2xl'
            style={{
              background:
                'linear-gradient(150deg,rgba(176, 176, 176, 0.2),rgba(103, 102, 102, 0.2))',
            }}
          >
            <h4 className='w-5/6 m-auto text-xl text-center text-blue font-bold mb-8'>
              {t('EDR.idea1')}
            </h4>
            <ul>{contentTerminal}</ul>
          </div>
          <div
            className='multi-task-content rounded-2xl'
            style={{
              background:
                'linear-gradient(150deg,rgba(176, 176, 176, 0.2),rgba(103, 102, 102, 0.2))',
            }}
          >
            <h4 className='w-5/6 m-auto text-xl text-center text-blue font-bold mb-8'>
              {t('EDR.idea2')}
            </h4>
            <ul>{contentBehavioral}</ul>
          </div>
          <div
            className='multi-task-content rounded-2xl'
            style={{
              background:
                'linear-gradient(150deg,rgba(176, 176, 176, 0.2),rgba(103, 102, 102, 0.2))',
            }}
          >
            <h4 className='w-5/6 m-auto text-xl text-center text-blue font-bold mb-8'>
              {t('EDR.idea3')}
            </h4>
            <ul>{contentMalware}</ul>
          </div>
          <div
            className='multi-task-content rounded-2xl'
            style={{
              background:
                'linear-gradient(150deg,rgba(176, 176, 176, 0.2),rgba(103, 102, 102, 0.2))',
            }}
          >
            <h4 className='w-5/6 m-auto text-xl text-center text-blue font-bold mb-8'>
              {t('EDR.idea4')}
            </h4>
            <ul>{contentInformation}</ul>
          </div>
        </div>
      </div>
      <div className='text-lg'>
        <p>{t('EDR.content21')}</p>
      </div>
    </div>
  );
}

export default MultiTask;
