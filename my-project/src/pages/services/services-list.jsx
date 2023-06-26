import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import { ServicesContext } from './hooks/services-context';
import introServicesImg from '../../assets/images/services/Icon04-2.png';
function ServicesList() {
  const { t } = useTranslation();
  const { dataServices } = useContext(ServicesContext);
  const [hoverServices, setHoverServices] = useState(null);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section className='relative flex flex-col'>
      <LazyLoad className='intro-services-img' offset={100} once>
        <img
          className='Scale'
          src={introServicesImg}
          alt='intro-services-img'
        />
      </LazyLoad>
      <div className='services-list'>
        {dataServices.map((service, index) => {
          return (
            <article
              key={index}
              className={`relative bg-boldBlue Scale ${
                hoverServices === index ? 'hoverServices' : 'notHoverServices'
              }`}
              onMouseOver={() => setHoverServices(index)}
              onMouseOut={() => setHoverServices(null)}
              onTouchStart={() => setHoverServices(index)}
              onTouchEnd={() => setHoverServices(null)}
            >
              <LazyLoad className='w-[60px] h-[60px]' offset={100} once>
                <img
                  src={
                    hoverServices === index
                      ? service.introImg
                      : service.hoverIntroImg
                  }
                  alt='secureImg'
                />
              </LazyLoad>
              <h4 className='my-2 text-start text-[20px] leading-[23.48px] font-bold'>
                {service.intro}
              </h4>
              <p className='text-start leading-[18.78px]'>
                {t(`services-page.firstWord${index + 1}`)}
              </p>
              {hoverServices === index ? (
                <Link
                  className='w-[89px] font-bold'
                  to={`${service.link}`}
                  onClick={handleScrollToTop}
                >
                  <i className='services fa fa-long-arrow-right'></i>
                </Link>
              ) : (
                ''
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default ServicesList;
