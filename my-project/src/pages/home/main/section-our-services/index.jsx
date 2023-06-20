import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import { ServicesContext } from '../../../services/hooks/services-context';
function OurServices() {
  const { t } = useTranslation();
  const [hoverServices, setHoverServices] = useState(null);
  const { dataServices } = useContext(ServicesContext);
  const handleClick = () => {
    window.scroll(0, 0);
  };
  return (
    <section className='container m-auto text-center Up'>
      <h3 className='text-[64px] text-blue tracking-[0.2em] font-bold'>
        {t('SERVICES')}
      </h3>
      <p className='my-4 text-[24px] text-white font-bold'>
        With Quality services for you
      </p>
      <div className='home-services mt-12'>
        {dataServices.map((service, index) => {
          return (
            <article
              key={index}
              className={`bg-boldBlue ${
                hoverServices === index ? 'hoverServices' : 'notHoverServices'
              }`}
              onMouseOver={() => setHoverServices(index)}
              onMouseOut={() => setHoverServices(null)}
            >
              <LazyLoad className='w-[60px] h-[60px]' offset={100} once>
                <img src={service.introImg} alt='secureImg' />
              </LazyLoad>
              <h4 className='my-2 text-start text-[20px] font-bold'>
                {service.intro}
              </h4>
              <p className='text-start'>
                {t(`services-page.firstWord${index + 1}`)}
              </p>
              <Link
                className='py-2 text-end font-bold'
                to={`/services/${service.link}`}
                onClick={handleClick}
              >
                {t('services.read-more')}
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default OurServices;
