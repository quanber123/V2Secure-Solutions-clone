import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
function NavServices() {
  const [showServices, setShowServices] = useState(false);
  const [selectedServices, setSelectedServices] = useState(
    'Đánh giá điểm yếu và Thử nghiệm xâm nhập (Pentest)'
  );
  const handleChangeServices = useCallback((tab) => {
    setShowServices(false);
    setSelectedServices(tab);
    window.localStorage.setItem('tabServices', selectedServices);
  }, []);
  return (
    <nav className='my-8'>
      <h3 className='text-center text-xl xl:text-2xl font-bold'>
        DANH MỤC DỊCH VỤ
      </h3>
      <button
        className='w-1/2 md:w-1/4 mx-auto my-4 px-4 py-3 flex rounded-2xl border border-blue text-blue justify-center items-center'
        onClick={() => setShowServices((prevShow) => !prevShow)}
      >
        {selectedServices}
      </button>
      {showServices && (
        <ul className='w-1/2 md:w-1/4 mx-auto bg-lightGray p-4 rounded-xl flex flex-col justify-between'>
          <li className='my-2'>
            <Link
              to='rate-and-test'
              onClick={() =>
                handleChangeServices(
                  'Đánh giá điểm yếu và Thử nghiệm xâm nhập (Pentest)'
                )
              }
            >
              Đánh giá điểm yếu và Thử nghiệm xâm nhập (Pentest)
            </Link>
          </li>
          <li className='my-2'>
            <Link
              to='consultant'
              onClick={() =>
                handleChangeServices(
                  'Dịch vụ tư vấn chiến lược an toàn thông tin'
                )
              }
            >
              Dịch vụ tư vấn chiến lược an toàn thông tin
            </Link>
          </li>
          <li className='my-2'>
            <Link
              to='scanning'
              onClick={() => handleChangeServices('Dò quét phát hiện mã độc')}
            >
              Dò quét phát hiện mã độc
            </Link>
          </li>
          <li className='my-2'>
            <Link
              to='test-weakness'
              onClick={() =>
                handleChangeServices(
                  'Kiểm tra, đánh giá điểm yếu trong mã nguồn'
                )
              }
            >
              Kiểm tra, đánh giá điểm yếu trong mã nguồn
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
export default NavServices;
