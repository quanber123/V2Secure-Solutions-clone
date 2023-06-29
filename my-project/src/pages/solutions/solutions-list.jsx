import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Spinner from '../../components/spinner/index';
import folderImg from '../../assets/images/solutions/folder.png';
import wallImg from '../../assets/images/solutions/wall.png';
import preventionImg from '../../assets/images/solutions/prevention.png';
import searchImg from '../../assets/images/solutions/search.png';
import controlImg from '../../assets/images/solutions/control.png';
import dataImg from '../../assets/images/solutions/data.png';
import guardImg from '../../assets/images/solutions/guard.png';
function SolutionsList() {
  const { t } = useTranslation();
  const [hoverSolutions, setHoverSolutions] = useState(null);
  const solutions = [
    {
      url: 'siem',
      imgUrl: folderImg,
      title: t('SIEM.title'),
    },
    {
      url: 'waf',
      imgUrl: wallImg,
      title: t('WAF.title'),
    },
    {
      url: 'nips',
      imgUrl: preventionImg,
      title: t('NIPS.title'),
    },
    {
      url: 'edr',
      imgUrl: searchImg,
      title: t('EDR.title'),
    },
    {
      url: 'nac',
      imgUrl: controlImg,
      title: t('NAC.title'),
    },
    {
      url: 'nids',
      imgUrl: guardImg,
      title: t('NIDS.title'),
    },
    {
      url: 'dip',
      imgUrl: dataImg,
      title: t('DIP.title'),
    },
    {
      url: 'swl3',
      imgUrl: guardImg,
      title: t('SWL3.title'),
    },
  ];
  const solution = solutions.map((solution, index) => {
    return (
      <div
        key={index}
        className={`relative Scale ${
          hoverSolutions === index ? 'hoverSolutions' : ''
        }`}
        onMouseOver={() => setHoverSolutions(index)}
        onMouseOut={() => setHoverSolutions(null)}
        onTouchStart={() => setHoverSolutions(index)}
        onTouchEnd={() => setHoverSolutions(null)}
      >
        <LazyLoad
          className='solutions-img-intro'
          offset={100}
          once
          placeholder={<Spinner />}
        >
          <img
            className='Scale'
            src={solution.imgUrl}
            alt={`${solution.url}-img`}
          />
        </LazyLoad>
        <Link to={`${solution.url}`}>
          <i className='solutions fa fa-long-arrow-right'></i>
        </Link>
        <h4 className='text-center text-[20px] leading-[23.48px] font-bold'>
          {solution.title}
        </h4>
      </div>
    );
  });
  return (
    <main className='w-4/5 m-auto'>
      <h3 className='my-8 lg:my-0 xl:text-[80px] lg:text-[64px] md:text-[52px] text-[32px] text-center md:tracking-[16px] tracking-[12px] font-bold uppercase Scale'>
        {t('our-solutions')}
      </h3>
      <p className='my-4 lg:text-[20px] text-[18px] text-white text-center Scale'>
        {t('solutions-intro')}
      </p>
      <section className='solutions-page-list py-32'>{solution}</section>
    </main>
  );
}
export default SolutionsList;
