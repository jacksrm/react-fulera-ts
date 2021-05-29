import { FC, useState } from 'react';
import './FAQItem.css';

interface FAQItemProps {
  itemTitle: string;
  itemContent: string;
}

const FAQItem: FC<FAQItemProps> = ({ itemTitle, itemContent, ...props }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <li className="FAQItem" {...props}>
      <button onClick={() => setHidden(!hidden)}>{itemTitle}</button>
      <span hidden={hidden}>{itemContent}</span>
    </li>
  );
};

export default FAQItem;
