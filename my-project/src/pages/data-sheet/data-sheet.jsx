import React from 'react';
import { useTranslation } from 'react-i18next';
function DownLoadDataSheet({ filePath, fileName }) {
  const { t } = useTranslation();
  const handleDownLoad = async () => {
    try {
      const res = await fetch(filePath);
      const data = await res.blob();
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const element = document.createElement('a');
      element.href = url;
      element.download = fileName;
      element.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='flex justify-center items-center my-16 Scale'>
      <button
        className='px-4 py-1 md:px-12 md:py-3 rounded-2xl text-lg font-bold border-2 border-darkBlue bg-boldBlue hover:bg-darkGreen hover:text-blue'
        style={{
          backgroundImage: `url(
                'https://cyberciti.1onestrong.com/wp-content/uploads/2023/05/asset-06.png'
              )`,
        }}
        onClick={handleDownLoad}
      >
        {t('download')}
      </button>
    </section>
  );
}

export default DownLoadDataSheet;
