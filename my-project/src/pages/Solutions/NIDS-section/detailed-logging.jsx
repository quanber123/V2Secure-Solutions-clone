import LazyLoad from 'react-lazyload';
import systemImg from '../../../images/information/v2-siem-8.ba484ce56ada73f54a8b.png';
import { useTranslation } from 'react-i18next';
function DetailedLogging() {
  const { t } = useTranslation();
  const detailedLogging = [
    {
      content: t('NIDS.content10'),
    },
    {
      content: t('NIDS.content11'),
    },
    {
      content: t('NIDS.content12'),
    },
    {
      content: t('NIDS.content13'),
    },
    {
      content: t('NIDS.content14'),
    },
  ];
  const contentDetailedLogging = detailedLogging.map((content, index) => {
    return (
      <li className='py-4 border-b border-b-gray flex' key={index}>
        <p>{content.content}</p>
        <i className='fa fa-check text-green ml-auto'></i>
      </li>
    );
  });
  return (
    <div className='container m-auto Right'>
      <h3 className='w-5/6 xl:w-4/5 m-auto py-12 text-center text-blue font-bold border-t border-t-gray'>
        {t('SIEM.title3')}
      </h3>
      <div className='flex flex-col lg:flex-row py-12'>
        <ul className='lg:w-2/3 font-bold'>{contentDetailedLogging}</ul>
        <LazyLoad
          className='lg:w-1/3 my-4 lg:my-0 flex justify-center items-center'
          offset={100}
          once
        >
          <img
            className='w-1/4 lg:w-2/3 Right'
            src={systemImg}
            alt='system-img'
          />
        </LazyLoad>
      </div>
    </div>
  );
}

export default DetailedLogging;
