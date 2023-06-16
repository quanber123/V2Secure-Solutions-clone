import { useTranslation } from 'react-i18next';

function PreventAttacks() {
  const { t } = useTranslation();
  const preventAttacks = [
    {
      content: t('WAF.content25'),
    },
    {
      content: t('WAF.content26'),
    },
    {
      content: t('WAF.content27'),
    },
  ];
  const contentPreventAttacks = preventAttacks.map((content, index) => {
    return (
      <li className='py-4 border-b border-b-gray' key={index}>
        <i className='fa fa-check-circle text-yellow mr-4'></i>
        {content.content}
      </li>
    );
  });
  return (
    <div
      className='xl:w-1/2 mx-8 p-12 rounded-2xl Left'
      style={{
        background:
          'linear-gradient(150deg,rgba(176, 176, 176, 0.2),rgba(103, 102, 102, 0.2))',
      }}
    >
      <h3 className='text-center text-blue font-bold mb-8'>
        {t('WAF.title5')}
      </h3>
      <ul>{contentPreventAttacks}</ul>
    </div>
  );
}

export default PreventAttacks;
