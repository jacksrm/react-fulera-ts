import { Link } from 'react-router-dom';
import { HTMLAttributes } from 'react';

import './Card.css';

interface CardProps extends HTMLAttributes<HTMLOrSVGElement> {
  to: string;
  title?: string;
  cover?: string;
  height: string;
  width: string;
  add?: boolean;
}

export default function Card({
  to,
  title,
  cover,
  height,
  width,
  ...props
}: CardProps) {
  const cardContent = (
    <>
      <div>
        <span>{title}</span>
      </div>
      <img src={cover} alt={title} />
    </>
  );
  return (
    <Link
      to={to}
      className={`Card ${props.add ? 'add' : ''}`}
      style={{ width, height }}
    >
      {props.add ? props.children : cardContent}
    </Link>
  );
}
