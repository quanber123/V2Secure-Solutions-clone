import { useContext } from 'react';
import { ScanningContext } from '../hooks/scanning-context';
import { useParams } from 'react-router-dom';
import Page404 from '../../404';

function ScanningDetail() {
  const { id } = useParams();
  const { data } = useContext(ScanningContext);
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
        <ul>
          {articleDetail.details.content.map((content, index) => {
            return (
              <li className='my-4' key={index}>
                <i className='fa fa-check text-green mr-2'></i>
                {content.list}
              </li>
            );
          })}
        </ul>
        <img
          className='m-auto'
          src={articleDetail.imgUrl}
          alt={articleDetail.title}
        />
      </div>
    </section>
  ) : (
    <Page404 />
  );
}
export default ScanningDetail;
