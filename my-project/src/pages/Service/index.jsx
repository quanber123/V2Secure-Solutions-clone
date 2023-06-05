import React from 'react';
import { useTranslation } from 'react-i18next';
import NavServices from './nav-services';
import { Outlet } from 'react-router-dom';
import { RateAndTestProvider } from './hooks/rate-and-test-context';
import { ConsultProvider } from './hooks/consultant-context';
import { ScanningProvider } from './hooks/scanning-context';
import { TestWeaknessProvider } from './hooks/test-weakness';
export default function Service() {
  const { t } = useTranslation();
  return (
    // <section className='flex flex-col justify-center items-center text-center py-44'>
    //   <i className='fa fa-signal text-6xl md:text-8xl text-blue Scale'></i>
    //   <div>
    //     <h1 className='text-4xl md:text-6xl my-8 Left'>{t('progress')}</h1>
    //     <h2 className='text-3xl md:text-5xl font-bold py-8 Right'>
    //       {t('progress2')}
    //     </h2>
    //     <h4 className='text-darkGray text-lg lg:text-xl Left'>
    //       {t('progress-content')}
    //     </h4>
    //   </div>
    // </section>
    <RateAndTestProvider>
      <ConsultProvider>
        <ScanningProvider>
          <TestWeaknessProvider>
            <NavServices />
            <Outlet />
          </TestWeaknessProvider>
        </ScanningProvider>
      </ConsultProvider>
    </RateAndTestProvider>
  );
}
