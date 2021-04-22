import Button from './Button';
import Logo from './Logo';

import './Navbar.css';

function Navbar() {
  return (
    <header className="Navbar">
      <Logo />
      <nav>
        <Button green lg circle to="/register">
          Registre-se
        </Button>
        <Button noBg noBorder to="/faq">
          FAQ
        </Button>
      </nav>
    </header>
  );
}

export default Navbar;
