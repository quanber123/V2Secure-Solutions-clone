import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ServicesContext } from './hooks/services-context';
import secureImg from './data/images/secure1.png';
import LazyLoad from 'react-lazyload';
import NavServices from './nav-services';
import carriedImg from '../../images/desktop.png';
import carriedColor from '../../images/desktopColor.png';
import receivedImg from '../../images/received.png';
import receivedColorImg from '../../images/receivedColor.png';
import processImg from '../../images/process.png';
import processColorImg from '../../images/processColor.png';
import improveImg from '../../images/improvement.png';
import improveColorImg from '../../images/improvementColor.png';
import reviewImg from '../../images/review.png';
import reviewColorImg from '../../images/reviewColor.png';
import managementImg from '../../images/management.png';
import managementColor from '../../images/managementColor.png';
function ServiceDetail() {
  const { t } = useTranslation();
  const { link } = useParams();
  const { dataServices } = useContext(ServicesContext);
  const serviceDetailRef = useRef(null);
  const prevLinkRef = useRef(link);

  useEffect(() => {
    const serviceDetailElement = serviceDetailRef.current;

    if (serviceDetailElement && prevLinkRef.current !== link) {
      serviceDetailElement.classList.add('animated');
      setTimeout(() => {
        serviceDetailElement.classList.remove('animated');
        prevLinkRef.current = link;
      }, 500);
    }
  }, [link]);
  const [stepState, setStepState] = useState(true);
  const [step, setStep] = useState(1);
  const stepContent = [
    {
      title: t('services-page.step1'),
      content: t('services-page.step-content1'),
    },
    {
      title: t('services-page.step2'),
      content: t('services-page.step-content2'),
    },
    {
      title: t('services-page.step3'),
      content: t('services-page.step-content3'),
    },
    {
      title: t('services-page.step4'),
      content: t('services-page.step-content4'),
    },
    {
      title: t('services-page.step5'),
      content: t('services-page.step-content5'),
    },
    {
      title: t('services-page.step6'),
      content: t('services-page.step-content6'),
    },
  ];
  function handleNext() {
    setStepState(true);
    if (stepContent.length === step) {
      return step.length;
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  }
  function handlePrev() {
    setStepState(false);
    if (step === 1) {
      return 1;
    } else {
      setStep((prevStep) => prevStep - 1);
    }
  }
  const serviceDetail = dataServices.find((service) => service.link === link);
  return (
    <section className={`${link} px-8 xl:px-0`} ref={serviceDetailRef}>
      <NavServices />
      <main className='container m-auto bg-lightGray p-8'>
        <div className='text-center py-8'>
          <h3 className='text-blue font-bold'>
            {serviceDetail.intro}
          </h3>
          <p className='w-4/5 mx-auto my-8'>
            {serviceDetail.firstWord}
          </p>
          {/* <button className='px-4 py-3 md:px-12 md:py-3 rounded-3xl text-lg font-bold border-2 border-darkBlue bg-boldBlue hover:bg-darkGreen hover:text-blue'>
            {t('view-more')}
          </button> */}
        </div>
        <div>
          <h3 className='text-blue font-bold text-center'>
            {serviceDetail.title}
          </h3>
          <p className='w-4/5 mx-auto my-4 text-center'>
            {serviceDetail.desc}
          </p>
          <div className='my-8 flex flex-col md:flex-row'>
            <ul className='md:w-1/2'>
              {serviceDetail.content.map((content, index) => {
                return (
                  <li className='my-4 font-bold' key={index}>
                    <i className='fa fa-check-circle text-green text-2xl mr-4'></i>
                    {content.list}
                  </li>
                );
              })}
            </ul>
            <LazyLoad className='md:w-1/2' offset={100} once>
              <img
                className='w-1/2 m-auto Scale'
                src={secureImg}
                alt='secure-img'
              />
            </LazyLoad>
          </div>
        </div>
      </main>
      <footer className='text-white'>
        <div className='text-center py-8'>
          <h3 className='font-bold text-blue'>
            {serviceDetail.endTitle}
          </h3>
          <p className='w-4/5 mx-auto my-4 text-center'>
            {serviceDetail.endWord}
          </p>
        </div>
        <div className='container m-auto w-4/5   py-8 text-black bg-lightGray'>
          <div className='flex justify-around p-8'>
            <LazyLoad className='xl:w-16 xl:h-16 w-8 h-8'>
              <img
                className={`${step === 1 ? 'active' : ''} process-ic bg-white`}
                onClick={() => setStep(1)}
                src={step === 1 ? carriedColor : carriedImg}
                alt='carried-img'
              />
            </LazyLoad>
            <LazyLoad className='xl:w-16 xl:h-16 w-8 h-8'>
              <img
                className={`${
                  step === 2 ? 'active' : ''
                }  process-ic bg-white `}
                onClick={() => setStep(2)}
                src={step === 2 ? receivedColorImg : receivedImg}
                alt='received-img'
              />
            </LazyLoad>
            <LazyLoad className='xl:w-16 xl:h-16 w-8 h-8'>
              <img
                className={`${step === 3 ? 'active' : ''}  process-ic bg-white`}
                onClick={() => setStep(3)}
                src={step === 3 ? processColorImg : processImg}
                alt='process-img'
              />
            </LazyLoad>
            <LazyLoad className='xl:w-16 xl:h-16 w-8 h-8'>
              <img
                className={`${step === 4 ? 'active' : ''} process-ic   
            bg-white`}
                onClick={() => setStep(4)}
                src={step === 4 ? improveColorImg : improveImg}
                alt=''
              />
            </LazyLoad>
            <LazyLoad className='xl:w-16 xl:h-16 w-8 h-8'>
              <img
                className={`${step === 5 ? 'active' : ''} process-ic bg-white`}
                onClick={() => setStep(5)}
                src={step === 5 ? reviewColorImg : reviewImg}
                alt='threat-img'
              />
            </LazyLoad>
            <LazyLoad className='xl:w-16 xl:h-16 w-8 h-8'>
              <img
                className={`${step === 6 ? 'active' : ''} process-ic bg-white`}
                onClick={() => setStep(6)}
                src={step === 6 ? managementColor : managementImg}
                alt='management-img'
              />
            </LazyLoad>
          </div>
          {stepContent.map((content, index) => {
            return (
              <div key={index}>
                {step === index + 1 ? (
                  <div
                    className={`text-center text-lg text-white ${
                      stepState ? 'Right' : 'Left'
                    }`}
                  >
                    <h4 className='text-blue font-bold'>{content.title}</h4>
                    <p>{content.content}</p>
                  </div>
                ) : (
                  ''
                )}
              </div>
            );
          })}
        </div>
        <div className='flex justify-center my-8 text-2xl'>
          <i className='fa fa-angle-left' onClick={handlePrev}></i>
          <i className='fa fa-angle-right' onClick={handleNext}></i>
        </div>
      </footer>
    </section>
  );
}
export default ServiceDetail;