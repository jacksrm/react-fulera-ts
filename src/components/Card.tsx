import { Link } from 'react-router-dom';
import { HTMLAttributes } from 'react';

import './Card.css';

interface CardProps extends HTMLAttributes<HTMLOrSVGElement> {
  to: string;
  title: string;
  cover: string;
}

export default function Card({ to, title, cover }: CardProps) {
  return (
    <>
      <Link to={to} className="Card">
        <div>
          <span>{title}</span>
        </div>
        <img src={cover} alt={title} />
      </Link>
    </>
  );
}
