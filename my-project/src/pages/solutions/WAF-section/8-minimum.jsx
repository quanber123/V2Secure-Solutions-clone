import LazyLoad from 'react-lazyload';
import minimumImg from '../../../images/application/download.png';
import { useTranslation } from 'react-i18next';
function Minimum() {
  const { t } = useTranslation();
  const minimum = [
    {
      content: t('WAF.content39'),
    },
    {
      content: t('WAF.content40'),
    },
    {
      content: t('WAF.content41'),
    },
    {
      content: t('WAF.content42'),
    },
    {
      content: t('WAF.content43'),
    },
    {
      content: t('WAF.content44'),
    },
  ];
  const contentMinimum = minimum.map((content, index) => {
    return (
      <li className='py-4 border-b border-b-gray' key={index}>
        <i className='fa fa-check-circle text-yellow mr-4'></i>
        {content.content}
      </li>
    );
  });
  return (
    <div className='container m-auto flex flex-col xl:flex-row justify-between Scale'>
      <div className='xl:w-1/2'>
        <h3 className='text-center text-blue font-bold mb-8'>
          {t('WAF.title8')}
        </h3>
        <LazyLoad
          className='h-full flex justify-center items-center my-8 xl:my-0'
          offset={100}
          once
        >
          <img
            className='w-1/3 xl:w-1/2 Scale'
            src={minimumImg}
            alt='minimum-img'
          />
        </LazyLoad>
      </div>
      <ul
        className='xl:w-1/2 p-12 rounded-2xl'
        style={{
          background:
            'linear-gradient(150deg,rgba(176, 176, 176, 0.2),rgba(103, 102, 102, 0.2))',
        }}
      >
        {contentMinimum}
      </ul>
    </div>
  );
}

export default Minimum;
