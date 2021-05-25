
import notFoundImg from '../assets/404.jpg';

import './NotFound.css';

export default function NotFound() {

  return (
    <div className="NotFound">
      <img src={notFoundImg} alt="Cat Not Found" />
    </div>
  )
}