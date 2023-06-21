import LazyLoad from 'react-lazyload';
import cyberImg from '../../../images/generation/download.png';
import { useTranslation } from 'react-i18next';
function Cyber() {
  const { t } = useTranslation();
  return (
    <div className='container m-auto flex flex-col lg:flex-row Right'>
      <div className='lg:w-1/2'>
        <h3 className='text-center text-blue font-bold'>
          {t('NIPS.title2')}
        </h3>
        <LazyLoad offset={100} once>
          <img className='m-auto my-8 Right' src={cyberImg} alt='cyber-img' />
        </LazyLoad>
      </div>
      <ul className='lg:w-1/2'>
        <li className='py-4'>
          <i className='fa fa-check-circle text-yellow mr-4'></i>
          {t('NIPS.content23')}
        </li>
        <li className='py-4'>
          <i className='fa fa-check-circle text-yellow mr-4'></i>
          {t('NIPS.content23')}
        </li>
      </ul>
    </div>
  );
}

export default Cyber;