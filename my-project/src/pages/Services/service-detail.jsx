import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect, useState, useRef } from 'react';
import secureImg from '../../data/images/secure1.png';
import { ServicesContext } from './hooks/services-context';
import LazyLoad from 'react-lazyload';
import NavServices from './nav-services';
function ServiceDetail() {
  const { link } = useParams();
  const { data } = useContext(ServicesContext);
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
      title: 'Step 1',
      content: 'DevSecOps implementation consulting',
    },
    {
      title: 'Step 2',
      content: 'Source code information security assessment',
    },
    {
      title: 'Step 3',
      content: 'Safe programming training',
    },
    {
      title: 'Step 4',
      content: 'Information security risk assessment (Threat Modeling)',
    },
    {
      title: 'Step 5',
      content: 'Information security advisor',
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
  const handleClick = () => {
    window.scroll(0, 0);
  };
  const serviceDetail = data.find((service) => service.link === link);
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
            View more
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
      <footer className='bg-boldBlue text-white'>
        <div className='text-center py-8'>
          <h3 className='text-2xl md:text-4xl font-bold'>
            {serviceDetail.endTitle}
          </h3>
          <p className='w-4/5 mx-auto my-4 text-center text-lg md:text-2xl'>
            {serviceDetail.endWord}
          </p>
        </div>
        <div className='container m-auto w-4/5 text-xl xl:text-3xl py-8 text-black bg-darkGray'>
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
                    <h4>{content.title}</h4>
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
      <div className='container m-auto border-b border-gray flex'>
        <Link
          className='flex items-center text-blue'
          to='../..'
          onClick={handleClick}
        >
          <i className='fa fa-home mr-2'></i>
          <h4>Back Home</h4>
        </Link>
        <span className='text-blue mx-2'>/</span>
        <Link className='text-blue' to='..' onClick={handleClick}>
          Services
        </Link>
        <span className='text-blue mx-2'>/</span>
        <h4>{serviceDetail.intro}</h4>
      </div>
    </section>
  );
}
export default ServiceDetail;
