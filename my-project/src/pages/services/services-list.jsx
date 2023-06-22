import { useEffect, useContext, useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import { ServicesContext } from './hooks/services-context';
import introServicesImg from '../../assets/images/services/Icon04-2.png';

function ServicesList() {
  const { t } = useTranslation();
  const [hoverServices, setHoverServices] = useState(null);
  const { dataServices } = useContext(ServicesContext);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [active, setActive] = useState(2);
  const itemsRef = useRef([]);

  useEffect(() => {
    loadShow();
  }, [active]);

  const loadShow = () => {
    const items = itemsRef.current;
    let stt = 0;

    items[active].style.transform = 'scale(1)';
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    for (let i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform = `translateY(${200 * stt}px) scale(${
        1 - 0.2 * stt
      })`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = 'blur(10px)';
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform = `translateY(${-200 * stt}px) scale(${
        1 - 0.2 * stt
      })`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = 'blur(10px)';
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  };

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY); // Check the direction of scroll
    if (delta > 0) {
      // Scrolling down
      setActive((prevActive) =>
        prevActive + 1 < itemsRef.current.length ? prevActive + 1 : prevActive
      );
    } else if (delta < 0) {
      // Scrolling up
      setActive((prevActive) =>
        prevActive - 1 >= 0 ? prevActive - 1 : prevActive
      );
    }
    handleScrollToTop();
  };

  return (
    <section
      className='flex justify-between items-center'
      onWheel={handleScroll}
    >
      <LazyLoad className='w-1/2' offset={100} once>
        <img src={introServicesImg} alt='intro-services-img' />
      </LazyLoad>
      <div className='w-1/2 services-list'>
        {dataServices.map((service, index) => {
          return (
            <article
              key={index}
              className={`relative bg-boldBlue ${
                hoverServices === index ? 'hoverServices' : 'notHoverServices'
              }`}
              ref={(el) => (itemsRef.current[index] = el)}
              onMouseOver={() => setHoverServices(index)}
              onMouseOut={() => setHoverServices(null)}
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
              <h4 className='my-2 text-start text-[20px] font-bold'>
                {service.intro}
              </h4>
              <p className='text-start'>
                {t(`services-page.firstWord${index + 1}`)}
              </p>
              {hoverServices === index && (
                <Link
                  className='py-2 text-end font-bold'
                  to={`${service.link}`}
                  onClick={handleScrollToTop}
                >
                  <i className='services-icon fa fa-long-arrow-right text-3xl Scale'></i>
                </Link>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesList;
