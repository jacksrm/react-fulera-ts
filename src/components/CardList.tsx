import { HTMLAttributes, useEffect } from 'react';
import './CardList.css';

interface CardListProps extends HTMLAttributes<HTMLOrSVGElement> {
  gallery?: boolean;
}

export default function CardList({gallery, ...props}: CardListProps) {
  return <div {...props} className={`CardList ${gallery ? 'gallery' : ''}`}>
    {props.children}
    </div>;
}
