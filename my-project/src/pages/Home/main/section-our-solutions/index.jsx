import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import vectorImg from '../../../../assets/images/home/Vector.png';
import LazyLoad from 'react-lazyload';
function OurSolutions() {
  const { t } = useTranslation();
  const [hoverSolutions, setHoverSolutions] = useState(null);
  const introSolutions = [
    {
      url: 'siem',
      content: t('intro.siem'),
    },
    {
      url: 'waf',
      content: t('intro.waf'),
    },
    {
      url: 'nips',
      content: t('intro.nips'),
    },
    {
      url: 'edr',
      content: t('intro.edr'),
    },
    {
      url: 'nac',
      content: t('intro.nac'),
    },
    {
      url: 'nids',
      content: t('intro.nids'),
    },
    {
      url: 'dip',
      content: t('intro.dip'),
    },
  ];
  const handleClick = () => {
    window.scroll(0, 0);
  };
  return (
    <section className='container m-auto text-center pb-32 Up'>
      <h3 className='text-[64px] text-blue tracking-[0.2em] font-bold'>
        {t('SOLUTIONS')}
      </h3>
      <div className='home-solutions text-black'>
        {introSolutions.map((solution, index) => {
          return (
            <article
              key={index}
              className={`bg-white  ${
                hoverSolutions === index ? 'hoverSolutions' : ''
              }`}
              onMouseOver={() => setHoverSolutions(index)}
              onMouseOut={() => setHoverSolutions(null)}
            >
              <LazyLoad offset={100} once>
                <img
                  className='w-[60px] m-auto Scale'
                  src={vectorImg}
                  alt='vector-img'
                />
              </LazyLoad>
              <h4 className='text-start'>{solution.content}</h4>
              <p className='text-start'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                nam magni vitae velit, magnam reprehenderit dolor enim? Natus
                ad, reprehenderit cum aperiam soluta accusamus! Explicabo
                aliquam alias officia id nihil.
              </p>
              <Link
                to={{
                  pathname: `/solutions/${solution.url}`,
                }}
                onClick={handleClick}
              >
                {t('services.read-more')}
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default OurSolutions;
