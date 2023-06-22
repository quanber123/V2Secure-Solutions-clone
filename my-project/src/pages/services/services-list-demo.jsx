import { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import { ServicesContext } from './hooks/services-context';
function ServicesList() {
  const [active, setActive] = useState(2);
  const itemsRef = useRef([]);
  const { t } = useTranslation();
  const [hoverServices, setHoverServices] = useState(null);
  const { dataServices } = useContext(ServicesContext);
  const handleClick = () => {
    window.scroll(0, 0);
  };
  useEffect(() => {
    loadShow();
  }, [active]);

  const loadShow = () => {
    const items = itemsRef.current;

    let stt = 0;
    items[active].style.transform = 'none';
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    for (let i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform = `translateY(${100 * stt}px) scale(${
        1 - 0.2 * stt
      })`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = 'blur(10px)';
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform = `translateY(${-100 * stt}px) scale(${
        1 - 0.2 * stt
      })`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = 'blur(10px)';
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  };

  const handleNext = () => {
    setActive((prevActive) =>
      prevActive + 1 < itemsRef.current.length ? prevActive + 1 : 0
    );
  };

  const handlePrev = () => {
    setActive((prevActive) =>
      prevActive - 1 >= 0 ? prevActive - 1 : dataServices.length - 1
    );
  };
  return (
    <section className='relative'>
      <div className='services-list'>
        {dataServices.map((service, index) => {
          return (
            <article
              key={index}
              className={`services-list-item bg-boldBlue ${
                hoverServices === index ? 'hoverServices' : 'notHoverServices'
              }`}
              ref={(el) => (itemsRef.current[index] = el)}
              onMouseOver={() => setHoverServices(index)}
              onMouseOut={() => setHoverServices(null)}
            >
              <LazyLoad className='w-[60px] h-[60px] m-auto' offset={100} once>
                <img
                  className='Scale'
                  src={
                    hoverServices === index
                      ? service.introImg
                      : service.hoverIntroImg
                  }
                  alt='secureImg'
                />
              </LazyLoad>
              <h4 className='my-2 text-center text-[20px] font-bold'>
                {service.intro}
              </h4>
              <p className='text-start'>
                {t(`services-page.firstWord${index + 1}`)}
              </p>
              <Link
                className='mx-auto py-2 font-bold'
                to={`${service.link}`}
                onClick={handleClick}
              >
                {t('services.read-more')}
              </Link>
            </article>
          );
        })}
      </div>
      <button onClick={handlePrev}>
        <i className='fa fa-angle-left prev'></i>
      </button>
      <button onClick={handleNext}>
        <i className='fa fa-angle-right next'></i>
      </button>
    </section>
  );
}
export default ServicesList;
