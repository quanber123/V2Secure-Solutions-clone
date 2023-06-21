import LazyLoad from 'react-lazyload';
import ellipseImg from '../../assets/images/contact/Ellipse16.png';
import phoneImg from '../../assets/images/contact/ic_baseline-local-phone.png';
import emailImg from '../../assets/images/contact/ic_baseline-email.png';
import { useTranslation } from 'react-i18next';
function ContactInfo() {
  const { t } = useTranslation();
  return (
    <div className='my-8 flex justify-between items-center gap-[20px]'>
      <h4 className='w-1/3 text-[56px]'>{t('touch')}</h4>
      <div className='phone-contact w-1/3'>
        <LazyLoad className='contact' offset={100} once>
          <img src={ellipseImg} alt='ellipse-img' />
          <img className='contact-phone-img' src={phoneImg} alt='phone-img' />
        </LazyLoad>
        <h5>Phone</h5>
        <p className='text-[24px] font-bold'>098 2720 920</p>
      </div>
      <div className='phone-mail w-1/3'>
        <LazyLoad className='contact' offset={100} once>
          <img src={ellipseImg} alt='ellipse-img' />
          <img className='contact-email-img' src={emailImg} alt='email-img' />
        </LazyLoad>
        <h5>Email</h5>
        <p className='text-[24px] font-bold'>info@imc.org.vn</p>
      </div>
    </div>
  );
}
export default ContactInfo;
