import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import carriedColor from '../../images/desktopColor.png';
import receivedColorImg from '../../images/receivedColor.png';
import processColorImg from '../../images/processColor.png';
import improveColorImg from '../../images/improvementColor.png';
import reviewColorImg from '../../images/reviewColor.png';
import managementColor from '../../images/managementColor.png';
import wireFrameImg from '../../assets/images/services/WireframeVector.png';
import line98 from '../../assets/images/services/Line98.png';
function ImplementProcess() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };
  const stepContent = [
    {
      title: t('services-page.step1'),
      urlImg: carriedColor,
      content: t('services-page.step-content1'),
    },
    {
      title: t('services-page.step2'),
      urlImg: receivedColorImg,
      content: t('services-page.step-content2'),
    },
    {
      title: t('services-page.step3'),
      urlImg: processColorImg,
      content: t('services-page.step-content3'),
    },
    {
      title: t('services-page.step4'),
      urlImg: improveColorImg,
      content: t('services-page.step-content4'),
    },
    {
      title: t('services-page.step5'),
      urlImg: reviewColorImg,
      content: t('services-page.step-content5'),
    },
    {
      title: t('services-page.step6'),
      urlImg: managementColor,
      content: t('services-page.step-content6'),
    },
  ];
  return (
    <section>
      <h3 className='w-[822px] m-auto text-[64px] text-center font-bold tracking-[18px] leading-[75.14px] uppercase Scale'>
        {t('services-page.endTitle')}
      </h3>
<<<<<<< HEAD
<<<<<<< HEAD
      <p className='w-[651px] mx-auto my-8 text-white text-[20px] text-center Scale'>
=======
      <p className='w-[651px] mx-auto my-8 text-white text-[20px] text-center'>
>>>>>>> e4a5935 (complete scroll animation)
=======
      <p className='w-[651px] mx-auto my-8 text-white text-[20px] text-center Scale'>
>>>>>>> 1aa5ac3 (fix font-size)
        {t('services-page.end-title-desc')}
      </p>
      {stepContent.map((content, index) => {
        return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1aa5ac3 (fix font-size)
          <div
            className='flex flex-col items-center text-center text-[20px]'
            key={index}
          >
            <LazyLoad className='my-8' {...lazyLoadOptions}>
<<<<<<< HEAD
              <img
                className='Scale line-98-img'
                src={line98}
                alt='line-98-img'
              />
            </LazyLoad>
            <LazyLoad
              {...lazyLoadOptions}
              className='w-[120px] h-[120px] m-auto flex justify-center items-center img-process-list'
            >
              <img
                className='w-[60px] h-[60px] m-auto Scale'
                src={content.urlImg}
                alt={content.title}
              />
            </LazyLoad>
            <h4 className='my-8 text-[32px] font-bold'>0{index + 1}</h4>
            <h5 className='w-[700px] m-auto leading-[56.35px] text-[48px] text-blue font-bold'>
              {content.title}
            </h5>
            <p className='w-[400px] mx-auto my-8 leading-[30px] text-[20px]'>
              {content.content}
            </p>
          </div>
        );
      })}
      <img
        className='Scale wire-frame-img-1'
        src={wireFrameImg}
        alt='wire-frame-img'
      />
      <img
        className='Scale wire-frame-img-2'
        src={wireFrameImg}
        alt='wire-frame-img'
      />
=======
          <div key={index}>
            <LazyLoad {...lazyLoadOptions}>
              <img src={line98} alt='line-98-img' />
            </LazyLoad>
            <LazyLoad {...lazyLoadOptions} className='xl:w-16 xl:h-16 w-8 h-8'>
=======
>>>>>>> 1aa5ac3 (fix font-size)
              <img
                className='Scale line-98-img'
                src={line98}
                alt='line-98-img'
              />
            </LazyLoad>
            <LazyLoad
              {...lazyLoadOptions}
              className='w-[120px] h-[120px] m-auto flex justify-center items-center img-process-list'
            >
              <img
                className='w-[60px] h-[60px] m-auto Scale'
                src={content.urlImg}
                alt={content.title}
              />
            </LazyLoad>
            <h4 className='my-8 text-[32px] font-bold'>0{index + 1}</h4>
            <h5 className='w-[700px] m-auto leading-[56.35px] text-[48px] text-blue font-bold'>
              {content.title}
            </h5>
            <p className='w-[400px] mx-auto my-8 leading-[30px] text-[20px]'>
              {content.content}
            </p>
          </div>
        );
      })}
<<<<<<< HEAD
      <LazyLoad {...lazyLoadOptions}>
        <img
          className='Scale wire-frame-img'
          src={wireFrameImg}
          alt='wire-frame-img'
        />
      </LazyLoad>
>>>>>>> e4a5935 (complete scroll animation)
=======
      <img
        className='Scale wire-frame-img-1'
        src={wireFrameImg}
        alt='wire-frame-img'
      />
      <img
        className='Scale wire-frame-img-2'
        src={wireFrameImg}
        alt='wire-frame-img'
      />
>>>>>>> 1aa5ac3 (fix font-size)
    </section>
  );
}

export default ImplementProcess;
