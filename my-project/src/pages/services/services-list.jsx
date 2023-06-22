<<<<<<< HEAD
import { useContext, useState } from 'react';
=======
import React, { useEffect, useContext, useRef, useState } from 'react';
>>>>>>> e4a5935 (complete scroll animation)
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
<<<<<<< HEAD
  return (
    <section className='relative'>
      <LazyLoad className='intro-services-img' offset={100} once>
        <img
          className='Scale'
          src={introServicesImg}
          alt='intro-services-img'
        />
      </LazyLoad>
      <div className='services-list'>
=======

  const [active, setActive] = useState(2);
  const itemsRef = useRef([]);

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
    event.stopPropagation();
    let delta = 0;

    // Xác định hướng cuộn dựa trên sự kiện cuộn cảm ứng hoặc sự kiện cuộn chuột
    if (event.touches) {
      const touch = event.touches[0];
      const startY = touch.clientY;
      const moveHandler = (e) => {
        const deltaY = e.touches[0].clientY - startY;
        if (deltaY > 10) {
          delta = 1; // Cuộn xuống
        } else if (deltaY < -10) {
          delta = -1; // Cuộn lên
        }
      };
      const endHandler = () => {
        window.removeEventListener('touchmove', moveHandler);
        window.removeEventListener('touchend', endHandler);
        if (delta !== 0) {
          handleScrollAction(delta);
        }
      };
      window.addEventListener('touchmove', moveHandler);
      window.addEventListener('touchend', endHandler);
    } else {
      delta = Math.sign(event.deltaY);
      handleScrollAction(delta);
    }
  };

  const handleScrollAction = (delta) => {
    if (delta > 0) {
      setActive((prevActive) =>
        prevActive + 1 < itemsRef.current.length ? prevActive + 1 : prevActive
      );
    } else if (delta < 0) {
      setActive((prevActive) =>
        prevActive - 1 >= 0 ? prevActive - 1 : prevActive
      );
    }
    handleScrollToTop();
    window.requestAnimationFrame(loadShow);
  };

  return (
    <section className='flex justify-between items-center'>
      <LazyLoad className='w-1/2' offset={100} once>
        <img src={introServicesImg} alt='intro-services-img' />
      </LazyLoad>
      <div
        className='w-1/2 services-list'
        onWheel={handleScroll}
        onTouchMove={handleScroll}
      >
>>>>>>> e4a5935 (complete scroll animation)
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
<<<<<<< HEAD
=======
              onWheel={handleScroll}
              onTouchMove={handleScroll}
>>>>>>> e4a5935 (complete scroll animation)
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
