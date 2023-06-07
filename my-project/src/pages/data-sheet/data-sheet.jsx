import React from 'react';
import { useTranslation } from 'react-i18next';
function DownLoadDataSheet({ filePath, fileName }) {
  const { t } = useTranslation();
  const handleDownload = async () => {
    try {
      const res = await fetch(filePath);
      if (res.ok) {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
      } else {
        throw new Error('Failed to fetch the PDF file.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='flex justify-center items-center my-16 Scale'>
      <button
        className='px-4 py-3 md:px-12 md:py-3 rounded-3xl text-lg font-bold border-2 border-darkBlue bg-boldBlue hover:bg-darkGreen hover:text-blue'
        style={{
          backgroundImage: `url(
                'https://cyberciti.1onestrong.com/wp-content/uploads/2023/05/asset-06.png'
              )`,
        }}
        onClick={handleDownload}
      >
        {t('download')}
      </button>
    </section>
  );
}

export default DownLoadDataSheet;
