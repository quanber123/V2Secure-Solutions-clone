import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SolutionsContext } from './hooks/solutions-context';
import LazyLoad from 'react-lazyload';
import Page404 from '../404/index';
import Gallery from './gallery-section/index';
import defaultImg from '../../assets/images/solutions/default-img.png';
function SolutionDetail() {
  const { link } = useParams();
  const { dataSolutions } = useContext(SolutionsContext);
  const solutionDetail = dataSolutions.find(
    (solution) => solution.link === link
  );
  return solutionDetail ? (
    <main className='solutions-page-detail py-16'>
      <h3 className='mx-auto my-8 xl:text-[40px] md:text-[36px] text-[32px] text-center font-bold tracking-[18px] leading-[46.96px] uppercase Scale'>
        {solutionDetail.title}
      </h3>
      <p className='my-4 lg:text-[20px] text-[18px] text-white text-center Scale'>
        {solutionDetail.intro}
      </p>
      <section>
        {solutionDetail.details.map((content, index) => {
          return (
            <div className='solutions-page-item-detail' key={index}>
              <LazyLoad className='w-1/3'>
                <img
                  className='m-auto'
                  src={content?.imgUrl || defaultImg}
                  alt=''
                />
              </LazyLoad>
              <div className='w-2/3 '>
                <h4 className='text-blue'>{content.step}</h4>
                <ul>
                  {content.content.map((list, index) => {
                    return <li key={index}>{list.list}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </section>
      <Gallery />
    </main>
  ) : (
    <Page404 />
  );
}
export default SolutionDetail;
