import { HTMLAttributes } from 'react';
import './CardList.css';

interface CardListProps extends HTMLAttributes<HTMLOrSVGElement> {
}

export default function CardList(props: CardListProps) {
  return <div {...props} className="CardList">{props.children}</div>;
}
