import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import thumbsupImg from '../../../assets/images/home/Thumbsup.png';
import siem from '../../../images/ecosystem/siem.png';
import waf from '../../../images/ecosystem/waf.png';
import nips from '../../../images/ecosystem/nips.png';
import edr from '../../../images/ecosystem/edr.png';
import nac from '../../../images/ecosystem/nac.png';
function Header() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };
  const dataIntro = [
    {
      url: siem,
      content: 'intro.siem',
    },
    {
      url: waf,
      content: 'intro.waf',
    },
    {
      url: nips,
      content: 'intro.nips',
    },
    {
      url: edr,
      content: 'intro.edr',
    },
    {
      url: nac,
      content: 'intro.nac',
    },
  ];

  const [intros, setIntros] = useState([]);

  useEffect(() => {
    const updatedIntros = dataIntro.map((item) => ({
      url: item.url,
      content: t(item.content),
    }));
    setIntros(updatedIntros);
  }, [t]);
  const handleScroll = () => {
    const element = document.getElementById('our-services');
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <header className='container m-auto Scale'>
      <div className='flex justify-between items-center'>
        <div className='w-1/2'>
          <h1 className='text-[80px] text-[#F5F5F5] font-bold leading-[93px]'>
            {t('intro.title1')}
          </h1>
          <h3 className='my-4 text-[80px] text-[#F5F5F5] font-bold leading-[93px]'>
            {t('intro.title3')}
          </h3>
          <p className='my-8 w-4/5 text-gray leading-[19px]'>
            Fagonet is a cybersecurity company that provides cyber risk
            management and services on behalf of our valued technology and
            distribution partners.
          </p>
          <button
            className='mt-12 w-[241px] h-[61px] bg-[#80CED7] text-boldBlue font-bold rounded-[30px]'
            style={{ boxShadow: '0px 8px 24px rgba(204, 219, 220, 0.28)' }}
            onClick={handleScroll}
          >
            {t('started')}
          </button>
        </div>
        <div className='w-1/2'>
          <img
            className='m-auto w-4/5'
            src={thumbsupImg}
            alt='intro-img-home'
          />
        </div>
      </div>
      {/* <div className='w-3/4 h-1/3 mx-auto mt-12 mb-4 hidden sm:flex flex-wrap justify-between items-center Up'>
        {intros.map((intro, index) => (
          <article
            key={index}
            className='flex flex-col justify-between items-between gallery-title-header text-gray hover:text-white opacity-80 hover:opacity-100'
          >
            <LazyLoad
              className='m-auto gallery-img-header'
              key={index}
              {...lazyLoadOptions}
            >
              <img className='h-full Up' src={intro.url} alt={intro.content} />
            </LazyLoad>
            <h3 className='h-20 text-center'>{intro.content}</h3>
          </article>
        ))}
      </div> */}
    </header>
  );
}

export default Header;
