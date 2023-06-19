import deploymentImg from '../../../images/solutions/v2-edr-4.ba484ce56ada73f54a8b.png';
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
function Deployment() {
  const { t } = useTranslation();
  const lazyLoadOptions = {
    offset: 100,
    once: true,
  };
  const deployment = [
    {
      content: 'Windows 11; Windows 10',
    },
    {
      content: 'Windows Server 2008 R2',
    },
    {
      content: 'Windows Server 2012 R2',
    },
    {
      content: 'Windows Server 2016',
    },
    {
      content: 'Windows Server 2019',
    },
    {
      content: 'CentOS 7.x; CentOS 8.x',
    },
    {
      content: 'Debian 10; Debian 11',
    },
  ];
  const contentDeployment = deployment.map((content, index) => {
    return (
      <li className='py-4 border-b border-b-gray flex' key={index}>
        <p>{content.content}</p>
        <i className='fa fa-check text-green ml-auto'></i>
      </li>
    );
  });
  return (
    <div className='container m-auto Left'>
      <h3 className='w-4/5 m-auto py-12 text-center text-blue font-bold border-t border-t-gray'>
        {t('EDR.title4')}
      </h3>
      <div className='flex flex-col lg:flex-row py-12'>
        <ul className='lg:w-2/3 font-bold'>{contentDeployment}</ul>
        <LazyLoad
          className='w-1/3 mx-auto lg:mx-0 flex justify-center items-center'
          {...lazyLoadOptions}
        >
          <img
            className='w-2/3 mx-auto lg:mx-0 Left'
            src={deploymentImg}
            alt='deploy-img'
          />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Deployment;
