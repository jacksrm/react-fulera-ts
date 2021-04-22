import { Link } from 'react-router-dom'
import logo from '../assets/spotify.png';

import './Logo.css'

export default function Logo() {
  return (
    <>
      <Link className="Logo" to="/">
        <img src={logo} alt="logo spotify" />
        <h1>Spotify</h1>
      </Link>
    </>
  );
}