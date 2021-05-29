import Logo from './Logo';

import './Footer.css';

const Footer: React.FC = () => {
  function getDate() {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month < 10 ? '0' + month : month}/${year}`;
  }

  return (
    <>
      <div className="Footer">
        <Logo />
        <span>{getDate()}</span>
      </div>
    </>
  );
};

export default Footer;
