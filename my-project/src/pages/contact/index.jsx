import LazyLoad from 'react-lazyload';
import ContactInfo from './contact-info';
import ContactForm from './contact-form';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export default function Contact() {
  const { t } = useTranslation();
  return (
    <main className='container m-auto'>
      <section className='my-8 flex'>
        <Link to='..'>Home</Link>
        <span className='mx-2'>&gt;</span>
        <h5>{t('CONTACT')}</h5>
      </section>
      <section>
        <h3 className='my-8 tracking-[18px] text-center text-[64px] font-bold uppercase Scale'>
          {t('CONTACT')}
        </h3>
        <h4 className='text-[56px] Scale'>{t('touch')}</h4>
        <div className='mt-8 mb-32 flex justify-between items-stretch gap-[40px]'>
          <LazyLoad>
            <ContactForm />
          </LazyLoad>
          <LazyLoad>
            <ContactInfo />
          </LazyLoad>
        </div>
      </section>
    </main>
  );
}
