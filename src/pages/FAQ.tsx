import { FC, useEffect, useState } from 'react';

import { TFAQ } from '../react-app-env';

import FAQItem from '../components/FAQItem';

import api from '../connections/api';

import './FAQ.css';

const FAQ: FC = () => {
  const [faqData, setFaqData] = useState<TFAQ>({ title: '', perguntas: [] });
  useEffect(() => {
    api.get('FAQ').then(({ data }) => setFaqData(data));
  }, []);

  return (
    <>
      <div className="FAQ">
        <h1>{faqData.title}</h1>
        <ul>
          {faqData.perguntas.map((quest, i) => {
            return (
              <FAQItem
                key={i}
                itemTitle={quest.title}
                itemContent={quest.content}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FAQ;
