import { useContext } from 'react';
import { TestWeaknessContext } from '../hooks/test-weakness';
import { useParams } from 'react-router-dom';
import Page404 from '../../404';
function TestWeakness() {
  const { id } = useParams();
  const { data } = useContext(TestWeaknessContext);
  const articleDetail = data.find((article) => {
    return article.id === parseInt(id);
  });
  return data.length ? (
    <section className='container m-auto p-8 flex flex-col bg-lightGray rounded-2xl'>
      <div className='border-b border-b-gray'>
        <h1 className='md:text-2xl text-blue font-bold'>
          {articleDetail.title}
        </h1>
        <p className='text-gray font-bold my-4'>
          <i className='fa fa-calendar-o mr-4'></i>
          {articleDetail.date}
        </p>
      </div>
      <div>
        <p className='text-gray md:text-xl text-lg font-bold my-4'>
          {articleDetail.details.intro}
        </p>
        <p className='text-gray md:text-lg font-bold'>
          {articleDetail.details.title}
        </p>
        <div className='my-4'>
          <h3 className='font-bold'>{articleDetail.details.methods.title}</h3>
          <ul>
            {articleDetail.details.methods.content.map((list, index) => {
              console.log(articleDetail);
              return (
                <li key={index}>
                  <i className='fa fa-check text-green mr-2'></i>
                  {list.list}
                </li>
              );
            })}
          </ul>
        </div>
        <img
          className='w-full m-auto rounded'
          src={articleDetail.imgUrl}
          alt={articleDetail.title}
        />
        <div className='my-4'>
          <h3 className='font-bold'>{articleDetail.details.process.title}</h3>
          <div>
            {articleDetail.details.process.step.map((step, index) => {
              return (
                <div className='my-4' key={index}>
                  <h4>{step.title}</h4>
                  <ul className='my-4'>
                    {step.content.map((content, index) => {
                      return (
                        <li key={index}>
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
        </div>
      </div>
    </section>
  ) : (
    <Page404 />
  );
}
export default TestWeakness;
