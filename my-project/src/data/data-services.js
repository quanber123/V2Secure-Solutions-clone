import img7 from './images/img7.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img6 from './images/img6.png';
import { useTranslation } from 'react-i18next';
export default function Data() {
  const { t } = useTranslation();
  const data = [
    {
      link: 'managed-security-service',
      intro: t('services-page.intro1'),
      imgUrl: img7,
      firstWord: t('services-page.firstWord1'),
      title: t('services-page.title'),
      desc: t('services-page.desc1'),
      content: [
        {
          list: t('services-page.content1.list1'),
        },
        {
          list: t('services-page.content1.list2'),
        },
        {
          list: t('services-page.content1.list3'),
        },
        {
          list: t('services-page.content1.list4'),
        },
      ],
      endTitle: t('services-page.endTitle'),
      endWord: t('services-page.endWord'),
    },
    {
      link: 'threat-hunting',
      intro: t('services-page.intro2'),
      imgUrl: img2,
      firstWord: t('services-page.firstWord2'),
      title: t('services-page.title'),
      desc: t('services-page.desc2'),
      content: [
        {
          list: t('services-page.content2.list1'),
        },
        {
          list: t('services-page.content2.list2'),
        },
        {
          list: t('services-page.content2.list3'),
        },
      ],
      endTitle: t('services-page.endTitle'),
      endWord: t('services-page.endWord'),
    },
    {
      link: 'pentest-and-audit',
      intro: t('services-page.intro3'),
      imgUrl: img3,
      firstWord: t('services-page.firstWord3'),
      desc: t('services-page.desc3'),
      content: [
        {
          list: t('services-page.content3.list1'),
        },
        {
          list: t('services-page.content3.list2'),
        },
        {
          list: t('services-page.content3.list3'),
        },
        {
          list: t('services-page.content3.list4'),
        },
      ],
      endTitle: t('services-page.endTitle'),
      endWord: t('services-page.endWord'),
    },
    {
      link: 'application-security',
      intro: t('services-page.intro4'),
      imgUrl: img6,
      firstWord: t('services-page.firstWord4'),
      title: t('services-page.title'),
      desc: t('services-page.desc4'),
      content: [
        {
          list: t('services-page.content4.list1'),
        },
        {
          list: t('services-page.content4.list2'),
        },
        {
          list: t('services-page.content4.list3'),
        },
        {
          list: t('services-page.content4.list4'),
        },
      ],
      endTitle: t('services-page.endTitle'),
      endWord: t('services-page.endWord'),
    },
  ];
  return { data };
}
