import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ServicesContext } from './hooks/services-context';
import { Link } from 'react-router-dom';
import NavServices from './nav-services';
import serviceDetailImg from '../../assets/images/services/service-detail-img.png';
import { useTranslation } from 'react-i18next';
function ServiceDetail() {
  const { t } = useTranslation();
  const { link } = useParams();
  const { dataServices } = useContext(ServicesContext);
<<<<<<< HEAD
=======
  const serviceDetailRef = useRef(null);
  const prevLinkRef = useRef(link);
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };
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
    if (stepContent.length === step) {
      return step.length;
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  }
  function handlePrev() {
    if (step === 1) {
      return 1;
    } else {
      setStep((prevStep) => prevStep - 1);
    }
  }
>>>>>>> e4a5935 (complete scroll animation)
  const serviceDetail = dataServices.find((service) => service.link === link);
  return (
<<<<<<< HEAD
    <section className='w-4/5 mx-auto mt-8 mb-32'>
      <div className='flex my-8'>
        <Link to='../..'>Home</Link>
        <span className='mx-2'>&gt;</span>
        <Link to='..'>{t('SERVICES')}</Link>
        <span className='mx-2'>&gt;</span>
        <h5>{serviceDetail.intro}</h5>
      </div>
      <h3 className='mx-auto my-8 text-[40px] text-center font-bold tracking-[18px] leading-[46.96px] uppercase Scale'>
        {serviceDetail.intro}
      </h3>
      <div className='my-8 flex justify-between gap-[40px]'>
        <div className='w-1/3'>
          <NavServices />
        </div>
        <div className='w-2/3 service-detail Up'>
          <img
            className='w-full Scale'
            src={serviceDetailImg}
            alt='service-detail-img'
          />
=======
    <>
      <div></div>
      <NavServices />
      <section className={`${link} px-8 xl:px-0`} ref={serviceDetailRef}>
        <main className='container m-auto bg-lightGray p-8'>
          <div className='text-center py-8'>
            <h3 className='text-blue font-bold'>{serviceDetail.intro}</h3>
            <p className='w-4/5 mx-auto my-8'>{serviceDetail.firstWord}</p>
          </div>
>>>>>>> 544bc47 (test)
          <div>
            <h4 className='my-4 text-[32px] font-bold'>
              {serviceDetail.intro}
            </h4>
            <p className='text-[20px]'>{serviceDetail.firstWord}</p>
            <h5 className='my-4 text-[24px] font-bold'>
              {serviceDetail.title}
<<<<<<< HEAD
            </h5>
            <p className='text-[20px]'>{serviceDetail.desc}</p>
            <div className='my-4 service-detail-list'>
              {serviceDetail.content.map((content, index) => {
                return (
                  <div className='flex items-center' key={index}>
                    <i className='fa fa-check-circle'></i>
                    <p className='mx-4'>{content.list}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
=======
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
              <LazyLoad className='md:w-1/2' {...lazyLoadOptions}>
                <img
                  className='w-1/2 m-auto Scale'
                  src={secureImg}
                  alt='secure-img'
                />
              </LazyLoad>
            </div>
          </div>
        </main>
        <aside className='text-white'>
          <div className='text-center py-8'>
            <h3 className='font-bold text-blue'>{serviceDetail.endTitle}</h3>
            <p className='w-4/5 mx-auto my-4 text-center'>
              {serviceDetail.endWord}
            </p>
          </div>
          <div className='container m-auto w-4/5   py-8 text-black bg-lightGray'>
            <div className='flex justify-around p-8'>
              <LazyLoad
                {...lazyLoadOptions}
                className='xl:w-16 xl:h-16 w-8 h-8'
              >
                <img
                  className={`${
                    step === 1 ? 'active' : ''
                  } process-ic bg-white  Scale`}
                  onClick={() => setStep(1)}
                  src={step === 1 ? carriedColor : carriedImg}
                  alt='carried-img'
                />
              </LazyLoad>
              <LazyLoad
                {...lazyLoadOptions}
                className='xl:w-16 xl:h-16 w-8 h-8'
              >
                <img
                  className={`${
                    step === 2 ? 'active' : ''
                  }  process-ic bg-white Scale `}
                  onClick={() => setStep(2)}
                  src={step === 2 ? receivedColorImg : receivedImg}
                  alt='received-img'
                />
              </LazyLoad>
              <LazyLoad
                {...lazyLoadOptions}
                className='xl:w-16 xl:h-16 w-8 h-8'
              >
                <img
                  className={`${
                    step === 3 ? 'active' : ''
                  }  process-ic bg-white Scale`}
                  onClick={() => setStep(3)}
                  src={step === 3 ? processColorImg : processImg}
                  alt='process-img'
                />
              </LazyLoad>
              <LazyLoad
                {...lazyLoadOptions}
                className='xl:w-16 xl:h-16 w-8 h-8'
              >
                <img
                  className={`${step === 4 ? 'active' : ''} process-ic   
            bg-white  Scale`}
                  onClick={() => setStep(4)}
                  src={step === 4 ? improveColorImg : improveImg}
                  alt=''
                />
              </LazyLoad>
              <LazyLoad
                {...lazyLoadOptions}
                className='xl:w-16 xl:h-16 w-8 h-8'
              >
                <img
                  className={`${
                    step === 5 ? 'active' : ''
                  } process-ic bg-white  Scale`}
                  onClick={() => setStep(5)}
                  src={step === 5 ? reviewColorImg : reviewImg}
                  alt='threat-img'
                />
              </LazyLoad>
              <LazyLoad
                {...lazyLoadOptions}
                className='xl:w-16 xl:h-16 w-8 h-8'
              >
                <img
                  className={`${
                    step === 6 ? 'active' : ''
                  } process-ic bg-white Scale`}
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
                    <div className='text-center text-lg text-white Scale'>
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
        </aside>
      </section>
    </>
>>>>>>> e4a5935 (complete scroll animation)
  );
}
export default ServiceDetail;
