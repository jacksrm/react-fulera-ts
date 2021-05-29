import notFoundImg from '../assets/404.jpg';

import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="NotFound">
      <img src={notFoundImg} alt="Cat Not Found" />
    </div>
  );
};

export default NotFound;
