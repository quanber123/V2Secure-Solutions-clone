import img7 from './images/img7.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img6 from './images/img6.png';
import introImg1 from './images/material-symbols_security.png';
import introImg2 from './images/material-symbols_security-threat.png';
import introImg3 from './images/ion_bag-check.png';
import introImg4 from './images/material-symbols_security-update-good.png';
import hoverIntroImg1 from './images/material-symbols-security-checked.png';
import hoverIntroImg2 from './images/mdi-shield-bug-checked.png';
import hoverIntroImg3 from './images/ion-bag-checked.png';
import hoverIntroImg4 from './images/material-symbols-security-update-good-checked.png';
import { useTranslation } from 'react-i18next';
export default function Data() {
  const { t } = useTranslation();
  const data = [
    {
      id: 0,
      link: 'managed-security-service',
      intro: t('services-page.intro1'),
      introImg: introImg1,
      hoverIntroImg: hoverIntroImg1,
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
      id: 1,
      link: 'threat-hunting',
      intro: t('services-page.intro2'),
      introImg: introImg2,
      hoverIntroImg: hoverIntroImg2,
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
      id: 2,
      link: 'pentest-and-audit',
      intro: t('services-page.intro3'),
      introImg: introImg3,
      hoverIntroImg: hoverIntroImg3,
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
      id: 3,
      link: 'application-security',
      intro: t('services-page.intro4'),
      introImg: introImg4,
      hoverIntroImg: hoverIntroImg4,
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
