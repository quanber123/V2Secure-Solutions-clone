import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
import secureImg from '../../../images/information/Update-Datto-Ransomware-Detection-Sell-Sheet-1200x800-1-768x512.png';
function Security() {
  const { t } = useTranslation();
  const security = [
    {
      content: t('SIEM.content27'),
    },
    {
      content: t('SIEM.content28'),
    },
    {
      content: t('SIEM.content29'),
    },
  ];
  const contentSecurity = security.map((content, index) => {
    return (
      <li key={index} className='flex border-b py-8 border-b-gray'>
        <div className='bg-yellow text-black text-center w-14 h-14 p-2 mr-4 rounded-md flex justify-center items-center'>
          0{index + 1}
        </div>
        <p className='w-11/12 ml-auto'>{content.content}</p>
      </li>
    );
  });
  return (
    <div className='container m-auto flex flex-col xl:flex-row-reverse justify-between Up'>
      <div className='xl:w-1/2 h-full flex flex-col justify-between items-center'>
        <h3 className='h-1/2 text-center text-blue font-bold py-8'>
          {t('SIEM.title6')}
        </h3>
        <LazyLoad className='h-1/2' offset={100} once>
          <img
            className='w-1/2 xl:w-2/3 m-auto'
            src={secureImg}
            alt='secure-img'
          />
        </LazyLoad>
      </div>
      <ul className='xl:w-1/2 font-bold'>
        {contentSecurity}
      </ul>
    </div>
  );
}

export default Security;
