import { useContext, useEffect, useState } from 'react';
import { BsPencilSquare, BsPlusCircle } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';

import CardList from '../components/CardList';

import AuthContext from '../contexts/auth';

import './Profile.css';

export default function Profile() {
  const { session } = useContext(AuthContext);
  const history = useHistory();

  const [name, setName] = useState('');
  const [nameURL, setNameURL] = useState('');

  useEffect(() => {
    if (!session.authenticated) {
      history.push('/login');
    }
  });

  useEffect(() => {
    if (session.authenticated) {
      setName(session.user.name);
      setNameURL(session.userURL);
    }
  }, [session]);

  return (
    <div className="Profile">
      <div className="profile-title">
        <h1>{name}</h1>
        <Button to={`/profile/update/${nameURL}`} green md circle>
          <BsPencilSquare
            style={{
              width: '20px',
              height: '20px',
              color: 'white',
              marginRight: '5px',
            }}
          />
          Editar perfil
        </Button>
      </div>

      <h2>Playlists de {name}</h2>
      <CardList gallery>
        <Card add to="/playlist/add" width="200px" height="200px">
          <BsPlusCircle style={{ width: '40px', height: '40px' }} />
        </Card>
      </CardList>
    </div>
  );
}
