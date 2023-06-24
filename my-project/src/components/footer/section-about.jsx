import { useState } from 'react';
import LazyLoad from 'react-lazyload';
import logo from '../../assets/images/home/logo.png';
import fbLogo from '../../assets/images/home/facebook.png';
import insLogo from '../../assets/images/home/ins.png';
import twLogo from '../../assets/images/home/tw.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
function SectionAbout() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 0,
    once: true,
  };
  const [form, setForm] = useState([
    {
      email: '',
    },
  ]);
  function handleForm(event) {
    const { value } = event.target;
    setForm((prevForm) => {
      return { ...prevForm, email: value, id: new Date().getTime() };
    });
  }
  function handleScroll() {
    window.scrollTo(0, 0);
  }
  return (
    <section className='container m-auto py-[60px] flex justify-between items-stretch'>
      <div className='w-1/4'>
        <div className='flex items-center'>
          <LazyLoad className='mr-2' {...lazyLoadOptions}>
            <img className='w-full' src={logo} alt='fagonet-logo' />
          </LazyLoad>
          <h3 className='text-[26px] text-blue font-bold'>FAGONET</h3>
        </div>
        <p className='my-2'>{t('fago-intro')}</p>
      </div>
      <div>
        <h5 className='h-1/4 text-[18px] font-bold'>Useful Links</h5>
        <ul className='text-start'>
          <li className='my-[4px] hover:text-blue'>
            <Link to='/' onClick={handleScroll}>
              {t('HOME')}
            </Link>
          </li>
          <li className='my-[4px] hover:text-blue'>
            <Link to='/services' onClick={handleScroll}>
              {t('SERVICES')}
            </Link>
          </li>
          <li className='my-[4px] hover:text-blue'>
            <Link to='/solutions' onClick={handleScroll}>
              {t('SOLUTIONS')}
            </Link>
          </li>
          <li className='my-[4px] hover:text-blue'>
            <Link to='/contact' onClick={handleScroll}>
              {t('CONTACT')}
            </Link>
          </li>
        </ul>
      </div>
      <div className='w-1/4 flex flex-col justify-center home-contact-us'>
        <h5 className='h-1/4 text-start text-[18px] font-bold'>Contact us</h5>
        <ul className='h-3/4'>
          <li>
            <span className='font-bold'>Address: </span>
            {t('about.district')}
          </li>
          <li>
            <span className='font-bold'>Email: </span>
            support@fagonet.com
          </li>
          <li>
            <span className='font-bold'>Phone: </span>(098) 272 0920
          </li>
        </ul>
      </div>
      <div>
        <div className='2/5'>
          <h4 className='mb-4 text-[20px] font-bold'>
            Let&#39;s work together!
          </h4>
        </div>
        <form className='relative' onSubmit={handleForm}>
          <input
            className='w-[307px] h-[48px] bg-white text-darkBlue px-[24px] py-[17px] rounded-[25px]'
            type='email'
            value={form.setForm}
            onChange={handleForm}
            placeholder='Email'
            checked
          />
          <button
            className='absolute w-[103px] h-[40px] bg-darkBlue font-bold right-1 top-1 rounded-[25px] hover:bg-blue hover:text-darkBlue'
            type='submit'
          >
            Submit
          </button>
        </form>
        <div className='flex mt-4'>
          <LazyLoad className='' {...lazyLoadOptions}>
            <img src={fbLogo} alt='fb-logo' />
          </LazyLoad>
          <LazyLoad className='mx-4 ' {...lazyLoadOptions}>
            <img src={insLogo} alt='ins-logo' />
          </LazyLoad>
          <LazyLoad className='' {...lazyLoadOptions}>
            <img src={twLogo} alt='tw-logo' />
          </LazyLoad>
        </div>
      </div>
    </section>
  );
}

export default SectionAbout;
