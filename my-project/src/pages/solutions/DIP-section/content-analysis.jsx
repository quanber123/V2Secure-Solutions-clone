import { useTranslation } from 'react-i18next';
import v2siem from '../../../images/information/v2-siem-6.3dc16344590ad630264b.png';
import LazyLoad from 'react-lazyload';
function ContentAnalysis() {
  const { t } = useTranslation();
  const contentAnalysis = [
    {
      content: t('DIP.content12'),
    },
    {
      content: t('DIP.content13'),
    },
    {
      content: t('DIP.content14'),
    },
    {
      content: t('DIP.content15'),
    },
  ];
  const contentContentAnalysis = contentAnalysis.map((content, index) => {
    return (
      <li key={index} className='flex py-8 border-b border-b-gray'>
        <div className='bg-yellow text-black text-center w-14 h-14 p-2 mr-4 rounded-md flex justify-center items-center'>
          0{index + 1}
        </div>
        <p className='w-11/12 ml-auto'>{content.content}</p>
      </li>
    );
  });
  return (
    <div className='container m-auto flex flex-col justify-between xl:flex-row Up'>
      <div className='xl:w-1/2 flex flex-col justify-between items-center'>
        <h3 className='lg:w-4/5 m-auto h-1/2 text-center text-blue font-bold py-8'>
          {t('DIP.title4')}
        </h3>
        <LazyLoad
          className='h-1/2 flex justify-center items-center'
          offset={100}
          once
        >
          <img className='w-full h-full m-auto Up' src={v2siem} alt={v2siem} />
        </LazyLoad>
      </div>
      <ul className='xl:w-1/2 font-bold'>{contentContentAnalysis}</ul>
    </div>
  );
}

export default ContentAnalysis;
