import { HTMLAttributes, useState } from 'react'
import './FAQItem.css'

interface FAQItemProps extends HTMLAttributes<HTMLOrSVGElement> {
  itemTitle: string;
  itemContent: string;
}

export default function FAQItem({ itemTitle, itemContent, ...props }: FAQItemProps) {
  const [hidden, setHidden] = useState(true);

  return (
    <li className="FAQItem" {...props}>
      <button onClick={() => setHidden(!hidden)}>
        { itemTitle }
      </button>
      <span hidden={hidden}>
        { itemContent }
      </span>
    </li>
  )
}