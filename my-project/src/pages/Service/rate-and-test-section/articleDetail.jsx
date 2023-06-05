import { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RateAndTestContext } from '../hooks/rate-and-test-context';
import Page404 from '../../404';
function RateAndTestDetails() {
  const { id } = useParams();
  const { data } = useContext(RateAndTestContext);
  const [sliceEnd, setSliceEnd] = useState(window.innerWidth < 976 ? 2 : 4);

  useEffect(() => {
    const handleResize = () => {
      setSliceEnd(window.innerWidth < 976 ? 2 : 4);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const articleDetail = data.find((article) => {
    return article.id === parseInt(id);
  });
  return data.length ? (
    <section className='container m-auto flex flex-col xl:flex-row'>
      <main className='xl:w-3/4 p-8 bg-lightGray rounded-2xl'>
        <div>
          <h1 className='md:text-2xl text-blue font-bold'>
            {articleDetail.title}
          </h1>
          <p className='text-gray font-bold my-4'>
            <i className='fa fa-calendar-o mr-4'></i>
            {articleDetail.date}
          </p>
        </div>
        <div>
          <img
            className='w-1/2 rounded'
            src={articleDetail.imgUrl}
            alt={articleDetail.title}
          />
          <p className='text-gray md:text-xl text-lg font-bold'>
            {articleDetail.details.intro}
          </p>
          <p className='text-gray md:text-lg font-bold'>
            {articleDetail.details.title}
          </p>
          {articleDetail.details.step.map((step, index) => {
            return (
              <div className='my-4' key={index}>
                <h3 className='font-bold'>{step.title}</h3>
                <h4 className='my-2'>{step.desc}</h4>
                <ul>
                  {step.content.map((content) => {
                    return (
                      <li>
                        <i className='fa fa-check text-green mr-2'></i>
                        {content.list}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <Link to='..'>Back</Link>
      </main>
      <aside className='xl:w-1/4 xxl:mx-8 my-12 xxl:my-0 px-8 py-8 rounded-2xl bg-lightGray'>
        <h1 className='md:text-2xl text-lg text-boldBlue font-bold'>
          Các dịch vụ khác
        </h1>
        <div className='article'>
          {data
            .filter((article) => article.id !== parseInt(id))
            .slice(0, sliceEnd)
            .map((article) => {
              return (
                <Link key={article.id} to={`../${article.id}`}>
                  <article className='w-full xxl:my-4 py-8 border-b border-b-gray cursor-pointer'>
                    <h1 className='text-blue font-boldBold'>{article.title}</h1>
                    <p className='my-4 text-gray'>{article.date}</p>
                    <img
                      className='w-1/3 xxl:w-1/2 rounded'
                      src={article.imgUrl}
                      alt={article.title}
                    />
                  </article>
                </Link>
              );
            })}
        </div>
      </aside>
    </section>
  ) : (
    <Page404 />
  );
}
export default RateAndTestDetails;
