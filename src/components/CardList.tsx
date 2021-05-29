import './CardList.css';

interface CardListProps {
  gallery?: boolean;
}

const CardList: React.FC<CardListProps> = ({ gallery, ...props }) => {
  return (
    <div {...props} className={`CardList ${gallery ? 'gallery' : ''}`}>
      {props.children}
    </div>
  );
};

export default CardList;
