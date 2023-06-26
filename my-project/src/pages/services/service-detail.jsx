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
  const serviceDetail = dataServices.find((service) => service.link === link);
  return (
    <section className='w-4/5 mx-auto mt-8 mb-32'>
      <div className='flex my-8'>
        <Link to='../..'>Home</Link>
        <span className='mx-2'>&gt;</span>
        <Link to='..'>{t('SERVICES')}</Link>
        <span className='mx-2'>&gt;</span>
        <h5>{serviceDetail.intro}</h5>
      </div>
      <h3 className='mx-auto my-8 xl:text-[40px] md:text-[36px] text-[32px] text-center font-bold tracking-[18px] leading-[46.96px] uppercase Scale'>
        {serviceDetail.intro}
      </h3>
      <div className='services-page-item-detail my-8 flex justify-between gap-[40px]'>
        <div className='xl:w-1/3 w-1/2'>
          <NavServices />
        </div>
        <div className='xl:w-2/3 w-1/2 service-detail Up'>
          <img
            className='w-full Scale'
            src={serviceDetailImg}
            alt='service-detail-img'
          />
          <div>
            <h4 className='my-4 xl:text-[32px] md:text-[28px] text-[24px] font-bold'>
              {serviceDetail.intro}
            </h4>
            <p className='lg:text-[20px] text-[18px]'>
              {serviceDetail.firstWord}
            </p>
            <h5 className='my-4 lg:text-[24px] text-[20px] font-bold'>
              {serviceDetail.title}
            </h5>
            <p className='lg:text-[20px] text-[18px]'>{serviceDetail.desc}</p>
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
  );
}
export default ServiceDetail;
