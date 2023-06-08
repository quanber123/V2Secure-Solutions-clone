import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ServicesContext } from './hooks/services-context';
import { useTranslation } from 'react-i18next';
function NavServices() {
  const { t } = useTranslation();
  const { dataServices } = useContext(ServicesContext);
  const [show, setShow] = useState(false);
  const handleClickTab = () => {
    setShow((prevShow) => !prevShow);
  };
  return (
    <nav className='container mx-auto my-8 Up'>
      <button
        className='px-4 py-3 text-xl text-boldBlue border border-blue rounded-md mb-4 '
        onClick={handleClickTab}
      >
        {t('SERVICES')}
      </button>
      {show && (
        <div className='nav-services w-full md:w-1/4 bg-lightGray my-8 rounded-xl p-4 flex flex-col justify-between'>
          {dataServices.map((service, index) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'my-2 text-blue font-bold' : 'my-2'
                }
                key={index}
                to={`../${service.link}`}
                onClick={handleClickTab}
              >
                {service.intro}
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
  );
}
export default NavServices;
