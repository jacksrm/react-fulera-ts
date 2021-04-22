import { HTMLAttributes } from 'react';
import './CardList.css';

interface CardListProps extends HTMLAttributes<HTMLOrSVGElement> {
}

export default function CardList(props: CardListProps) {
  return <div className="CardList">{props.children}</div>;
}
