import { useTranslation } from 'react-i18next';

function DecodeAssemble() {
  const { t } = useTranslation();
  const decodeAssemble = [
    {
      content: t('DIP.content9'),
    },
    {
      content: t('DIP.content10'),
    },
    {
      content: t('DIP.content11'),
    },
  ];
  const contentDecodeAssemble = decodeAssemble.map((content, index) => {
    return (
      <li key={index} className='flex border-b py-8 border-b-gray'>
        <p className='w-11/12'>{content.content}</p>
        <div className='bg-yellow text-black text-center w-14 h-14 p-2 ml-auto rounded-md flex justify-center items-center'>
          0{index + 1}
        </div>
      </li>
    );
  });
  return (
    <div className='container m-auto Up'>
      <h3 className='text-center text-blue font-bold mb-8'>
        {t('DIP.title3')}
      </h3>
      <ul className='font-bold'>{contentDecodeAssemble}</ul>
    </div>
  );
}

export default DecodeAssemble;
