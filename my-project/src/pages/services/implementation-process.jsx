import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import carriedColor from '../../images/desktopColor.png';
import receivedColorImg from '../../images/receivedColor.png';
import processColorImg from '../../images/processColor.png';
import improveColorImg from '../../images/improvementColor.png';
import reviewColorImg from '../../images/reviewColor.png';
import managementColor from '../../images/managementColor.png';
import line98 from '../../assets/images/services/Line98.png';
function ImplementationProcess() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };
  const stepContent = [
    {
      imgUrl: carriedColor,
      title: t('services-page.step1'),
      content: t('services-page.step-content1'),
    },
    {
      imgUrl: receivedColorImg,
      title: t('services-page.step2'),
      content: t('services-page.step-content2'),
    },
    {
      imgUrl: processColorImg,
      title: t('services-page.step3'),
      content: t('services-page.step-content3'),
    },
    {
      imgUrl: improveColorImg,
      title: t('services-page.step4'),
      content: t('services-page.step-content4'),
    },
    {
      imgUrl: reviewColorImg,
      title: t('services-page.step5'),
      content: t('services-page.step-content5'),
    },
    {
      imgUrl: managementColor,
      title: t('services-page.step6'),
      content: t('services-page.step-content6'),
    },
  ];
  return (
    <section className='py-8'>
      <div className='text-center'>
        <h3 className='w-[822px] h-[150px] m-auto tracking-[18px] leading-[75.14px] text-[64px] font-bold uppercase'>
          Implementation process
        </h3>
        <p className='w-[651px] h-[69px] mx-auto my-8 text-[20px] font-bold'>
          We are committed to providing services with a comprehensive
          implementation process, ensuring compliance with clients’ information
          security policies and procedures
        </p>
      </div>
      <div className='flex flex-col items-center text-center text-[20px]'>
        {stepContent.map((content, index) => {
          return (
            <article key={index}>
              <LazyLoad {...lazyLoadOptions}>
                <img className='m-auto' src={line98} alt='line-img' />
              </LazyLoad>
              <LazyLoad
                className='w-[120px] h-[120px] m-auto'
                {...lazyLoadOptions}
              >
                <img
                  className='w-[60px] h-[60px] m-auto'
                  src={content.imgUrl}
                  alt={content.title}
                />
              </LazyLoad>
              <h4 className='w-[700px] m-auto leading-[56.35px] text-[48px] text-blue'>
                {content.title}
              </h4>
              <p className='w-[400px] m-auto leading-[30px]'>
                {content.content}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default ImplementationProcess;
