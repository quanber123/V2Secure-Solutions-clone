import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect, useState, useRef } from 'react';
import secureImg from '../../data/images/secure1.png';
import { ServicesContext } from './hooks/services-context';
import LazyLoad from 'react-lazyload';
import NavServices from './nav-services';
import { useTranslation } from 'react-i18next';
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
      title: t('step1'),
      content: t('step-content1'),
    },
    {
      title: t('step2'),
      content: t('step-content2'),
    },
    {
      title: t('step3'),
      content: t('step-content3'),
    },
    {
      title: t('step4'),
      content: t('step-content4'),
    },
    {
      title: t('step5'),
      content: t('step-content5'),
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
    <section className={`${link}`} ref={serviceDetailRef}>
      <NavServices />
      <main className='container m-auto bg-lightGray p-8'>
        <div className='text-center py-8'>
          <h3 className='text-2xl md:text-4xl text-blue font-bold'>
            {serviceDetail.intro}
          </h3>
          <p className='w-4/5 mx-auto my-8 text-lg md:text-xl'>
            {serviceDetail.firstWord}
          </p>
          <button className='px-4 py-1 md:px-12 md:py-3 rounded-2xl text-lg font-bold border-2 border-darkBlue bg-boldBlue hover:bg-darkGreen hover:text-blue'>
            {t('view-more')}
          </button>
        </div>
        <div>
          <h3 className='text-2xl md:text-4xl text-blue font-bold text-center'>
            {serviceDetail.title}
          </h3>
          <p className='w-4/5 mx-auto my-4 text-center text-lg md:text-2xl'>
            {serviceDetail.desc}
          </p>
          <div className='flex flex-col md:flex-row'>
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
      <footer className=' text-white'>
        <div className='text-center py-8'>
          <h3 className='text-2xl md:text-4xl font-bold text-blue'>
            {serviceDetail.endTitle}
          </h3>
          <p className='w-4/5 mx-auto my-4 text-center text-lg md:text-2xl'>
            {serviceDetail.endWord}
          </p>
        </div>
        <div className='container m-auto w-4/5 text-xl xl:text-3xl py-8 text-black bg-lightGray'>
          <div className='flex justify-around p-8'>
            <i
              className={`${
                step === 1 ? 'active' : ''
              } fa fa-handshake-o process-ic bg-white  xl:w-16 xl:h-16 w-8 h-8`}
              onClick={() => setStep(1)}
            ></i>
            <i
              className={`${
                step === 2 ? 'active' : ''
              } fa fa-info-circle process-ic bg-white  xl:w-16 xl:h-16 w-8 h-8`}
              onClick={() => setStep(2)}
            ></i>
            <i
              className={`${
                step === 3 ? 'active' : ''
              } fa fa-gears process-ic bg-white xl:w-16 xl:h-16 w-8 h-8`}
              onClick={() => setStep(3)}
            ></i>
            <i
              className={`${
                step === 4 ? 'active' : ''
              } fa fa-assistive-listening-systems process-ic   
            bg-white  xl:w-16 xl:h-16 w-8 h-8`}
              onClick={() => setStep(4)}
            ></i>
            <i
              className={`${
                step === 5 ? 'active' : ''
              } fa fa-gavel process-ic bg-white  xl:w-16 xl:h-16 w-8 h-8`}
              onClick={() => setStep(5)}
            ></i>
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
