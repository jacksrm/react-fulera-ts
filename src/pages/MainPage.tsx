// import SubPage from './SubPage';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

import Button from '../components/Button';
import CardList from '../components/CardList';
import Card from '../components/Card';
import SuccessBox from '../components/SuccessBox';

import api from '../connection/api';

import './MainPage.css';
interface MainPageProps {
  state: any;
}

export default function MainPage({ state }: MainPageProps) {
  const [playlists, setPlaylists] = useState<TPlaylist[]>([]);
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    api.get('playlists')
      .then( response => setPlaylists(response.data));

    if(state) {
      setSuccess(state.success);
      setMessage(state.message);
    }

  }, [state])

  return (
    <>
      <SuccessBox success={success}>
        {message} 
      </SuccessBox>
      <div className="MainPage">
        <div className="container">
          <h1>Vá de premium. E seja feliz</h1>
          <Button to="/register" green lg circle>
            obter spotify premium
          </Button>
        </div>
        <Button
          id="termos"
          to="#"
          style={{
            fontSize: '0.9rem',
            textDecoration: 'underline',
            textTransform: 'none',
          }}>
          * Sujeito a termos e condições.
        </Button>
      </div>

      <div className="SubPage">
        <h1>É música que você quer?</h1>
        <p>Escute uma de nossas playlists gratuitas.</p>
        <Button gray noBg lg circle to="/register">
          obter spotify premium
        </Button>

        <CardList>
          {playlists.map((list: any) => {
            return (
              <Card
                key={list.id}
                to={`/playlist/${list.id}`}
                title={list.playlistName}
                cover={ 'http://localhost:3333/' + list.cover }
              />
            );
          })}
        </CardList>
      </div>
    </>
  );
}
