import { Link } from 'react-router-dom';

import './Card.css';

interface CardProps {
  to: string;
  title?: string;
  cover?: string;
  height: string;
  width: string;
  add?: boolean;
}

const Card: React.FC<CardProps> = ({
  to,
  title,
  cover,
  height,
  width,
  ...props
}) => {
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
      style={{ width, height }}>
      {props.add ? props.children : cardContent}
    </Link>
  );
};

export default Card;
