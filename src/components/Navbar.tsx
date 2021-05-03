import Button from './Button';
import Logo from './Logo';

import './Navbar.css';

function Navbar() {
  return (
    <header className="Navbar">
      <Logo />
      <nav>
        <Button noBg noBorder to="/faq"style={{ fontSize: '0.9rem'}}>
          FAQ
        </Button>
        <span>|</span>
        <Button noBg noBorder to="/register"style={{ fontSize: '0.9rem'}}>
          Registre-se
        </Button>
        <Button noBg noBorder to="/login" style={{ fontSize: '0.9rem'}}>
          Login
        </Button>
      </nav>
    </header>
  );
}

export default Navbar;
