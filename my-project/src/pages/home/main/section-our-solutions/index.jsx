import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import vectorImg from '../../../../assets/images/home/Vector.png';
import vectorHoverImg from '../../../../assets/images/home/VectorHover.png';
import earthImg from '../../../../assets/images/home/Thumbsup1.png';
import LazyLoad from 'react-lazyload';
function OurSolutions() {
  const { t } = useTranslation();
  const [hoverSolutions, setHoverSolutions] = useState(null);
  const introSolutions = [
    {
      id: 1,
      url: 'siem',
      content: t('intro.siem'),
    },
    {
      id: 2,
      url: 'waf',
      content: t('intro.waf'),
    },
    {
      id: 3,
      url: 'nips',
      content: t('intro.nips'),
    },
    {
      id: 4,
      url: 'edr',
      content: t('intro.edr'),
    },
    {
      id: 5,
      url: 'nac',
      content: t('intro.nac'),
    },
    {
      id: 6,
      url: 'nids',
      content: t('intro.nids'),
    },
    {
      id: 7,
      url: 'dip',
      content: t('intro.dip'),
    },
    {
      id: 8,
      url: 'dip',
      content: t('intro.dip'),
    },
  ];
  const handleClick = () => {
    window.scroll(0, 0);
  };
  return (
    <section className='container m-auto text-center pb-32 flex flex-row-reverse justify-between items-center'>
      <div className='w-1/2'>
        <h3 className='text-[64px] text-blue tracking-[18px] font-bold uppercase'>
          {t('SOLUTIONS')}
        </h3>
        <p className='w-2/3 mx-auto my-4 text-[20px] text-start'>
          {t('solutions-intro')}
        </p>
        <LazyLoad offset={100} once>
          <img className='m-auto Scale' src={earthImg} alt='earth-img' />
        </LazyLoad>
      </div>
      <div className='home-solutions w-1/2 text-black'>
        {introSolutions.map((solution) => {
          return (
            <article
              key={solution.id}
              className={`relative ${
                hoverSolutions === solution.id
                  ? 'hoverSolutions'
                  : 'notHoverSolutions'
              }`}
              onMouseOver={() => setHoverSolutions(solution.id)}
              onMouseOut={() => setHoverSolutions(null)}
            >
              <LazyLoad className='h-1/2' offset={100} once>
                <img
                  className='w-[40px] mr-auto Scale'
                  src={
                    hoverSolutions === solution.id ? vectorHoverImg : vectorImg
                  }
                  alt='vector-img'
                />
              </LazyLoad>
              <h4 className='h-1/2 my-2 text-start'>{solution.content}</h4>
              <Link
                className={`absolute top-2 right-8 mt-4 text-end text-boldBlue font-bold ${
                  hoverSolutions === solution.id ? 'block' : 'hidden'
                }`}
                to={{
                  pathname: `/solutions/${solution.url}`,
                }}
                onClick={handleClick}
              >
                <i className='fa fa-long-arrow-right text-3xl Scale'></i>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default OurSolutions;
