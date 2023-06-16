import LazyLoad from 'react-lazyload';
import planImg from '../../../images/application/v2-waf-2.9e1733d2be88b2a28b46.png';
import { useTranslation } from 'react-i18next';
function Plan() {
  const { t } = useTranslation();
  const plan = [
    {
      content: t('WAF.content2'),
    },
    {
      content: t('WAF.content3'),
    },
    {
      content: t('WAF.content4'),
    },
    {
      content: t('WAF.content5'),
    },
  ];
  const contentPlan = plan.map((content, index) => {
    return (
      <li className='py-4 border-b border-b-gray' key={index}>
        <i className='fa fa-check-circle text-yellow mr-4'></i>
        {content.content}
      </li>
    );
  });
  return (
    <div className='container m-auto flex flex-col lg:flex-row-reverse justify-between items-center'>
      <div
        className='p-12 rounded-2xl Right'
        style={{
          background:
            'linear-gradient(150deg,rgba(176, 176, 176, 0.2),rgba(103, 102, 102, 0.2))',
        }}
      >
        <h3 className='text-blue font-bold mb-8'>{t('WAF.title2')}</h3>
        <ul>{contentPlan}</ul>
      </div>
      <LazyLoad offset={100} once>
        <img
          className='my-8 lg:my-0 rounded-2xl Left'
          src={planImg}
          alt='plan-img'
        />
      </LazyLoad>
    </div>
  );
}

export default Plan;
