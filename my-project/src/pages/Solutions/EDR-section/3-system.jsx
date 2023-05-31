import React from 'react';
import { useTranslation } from 'react-i18next';
function System() {
  const { t } = useTranslation();
  return (
    <div className='container m-auto'>
      <h3 className='text-4xl text-center text-blue font-bold py-8'>
        {t('EDR.title3')}
      </h3>
      <div className='flex justify-between'>
        <ul className='w-1/2 mx-8'>
          <li className='flex border-b py-8 border-b-gray'>
            <div className='bg-yellow text-black text-xl text-center w-14 h-14 p-2 mr-4 rounded-md flex justify-center items-center'>
              01
            </div>
            <p className='w-11/12 ml-auto'> {t('EDR.content25')}</p>
          </li>
          <li className='flex border-b py-8 border-b-gray'>
            <div className='bg-yellow text-black text-xl text-center w-14 h-14 p-2 mr-4 rounded-md flex justify-center items-center'>
              02
            </div>
            <p className='w-11/12 ml-auto'> {t('EDR.content26')}</p>
          </li>
          <li className='flex border-b py-8 border-b-gray'>
            <div className='bg-yellow text-black text-xl text-center w-14 h-14 p-2 mr-4 rounded-md flex justify-center items-center'>
              03
            </div>
            <p className='w-11/12 ml-auto'> {t('EDR.content27')}</p>
          </li>
          <li className='flex border-b py-8 border-b-gray'>
            <div className='bg-yellow text-black text-xl text-center w-14 h-14 p-2 mr-4 rounded-md flex justify-center items-center'>
              04
            </div>
            <p className='w-11/12 ml-auto'> {t('EDR.content28')}</p>
          </li>
        </ul>
        <ul className='w-1/2 mx-8'>
          <li className='flex border-b py-8 border-b-gray'>
            <div className='bg-yellow text-black text-xl text-center w-14 h-14 p-2 mr-4 rounded-md flex justify-center items-center'>
              05
            </div>
            <p className='w-11/12 ml-auto'> {t('EDR.content29')}</p>
          </li>
          <li className='flex border-b py-8 border-b-gray'>
            <div className='bg-yellow text-black text-xl text-center w-14 h-14 p-2 mr-4 rounded-md flex justify-center items-center'>
              06
            </div>
            <p className='w-11/12 ml-auto'> {t('EDR.content30')}</p>
          </li>
          <li className='flex border-b py-8 border-b-gray'>
            <div className='bg-yellow text-black text-xl text-center w-14 h-14 p-2 mr-4 rounded-md flex justify-center items-center'>
              07
            </div>
            <p className='w-11/12 ml-auto'> {t('EDR.content31')}</p>
          </li>
          <li className='flex border-b py-8 border-b-gray'>
            <div className='bg-yellow text-black text-xl text-center w-14 h-14 p-2 mr-4 rounded-md flex justify-center items-center'>
              08
            </div>
            <p className='w-11/12 ml-auto'> {t('EDR.content32')}</p>
          </li>
          <li className='flex border-b py-8 border-b-gray'>
            <div className='bg-yellow text-black text-xl text-center w-14 h-14 p-2 mr-4 rounded-md flex justify-center items-center'>
              09
            </div>
            <p className='w-11/12 ml-auto'> {t('EDR.content33')}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default System;
