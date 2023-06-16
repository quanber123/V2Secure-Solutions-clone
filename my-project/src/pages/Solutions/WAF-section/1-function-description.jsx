import { useTranslation } from 'react-i18next';
function Description() {
  const { t } = useTranslation();
  return (
    <div className='container h-full mx-auto mt-32  pb-64 flex flex-col items-center justify-between Up'>
      <h3 className='lg:w-1/2  text-center lg:text-start text-blue font-bold'>
        {t('WAF.title1')}
      </h3>
      <p className='w-4/5 my-8 mx-auto lg:mx-0 lg:w-1/2 font-bold '>
        {t('WAF.content1')}
      </p>
    </div>
  );
}

export default Description;
