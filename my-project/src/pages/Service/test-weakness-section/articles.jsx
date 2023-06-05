import { useContext } from 'react';
import { TestWeaknessContext } from '../hooks/test-weakness';
import { Link } from 'react-router-dom';
function TestWeaknessDetail() {
  const { data } = useContext(TestWeaknessContext);
  return (
    <section className='container m-auto'>
      <h3 className='text-center text-2xl text-blue my-8'></h3>
      {data.map((article) => {
        return (
          <article
            className='w-4/5 m-auto md:my-14 py-8 border-b border-b-gray flex flex-col md:flex-row justify-between'
            key={article.id}
          >
            <img
              className='w-3/4 mx-auto lg:w-1/4 mb-4 lg:mb-0 rounded'
              src={article.imgUrl}
              alt={article.title}
            />
            <div className='md:w-2/3 md:mx-8'>
              <Link to={`${article.id}`}>
                <h4 className='text-xl text-boldBlue font-bold'>
                  {article.title}
                </h4>
              </Link>
              <p className='text-gray my-4'>
                <i className='fa fa-calendar-o mr-4'></i>
                {article.date}
              </p>
              <h5 className='text-lg'>{article.prevDesc}</h5>
            </div>
          </article>
        );
      })}
    </section>
  );
}
export default TestWeaknessDetail;
