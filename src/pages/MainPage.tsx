// import SubPage from './SubPage';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Button from '../components/Button';
import CardList from '../components/CardList';
import Card from '../components/Card';
import SuccessBox from '../components/SuccessBox';

import api from '../connection/api';

import './MainPage.css';
interface LocationProps {
  success: boolean;
  message: string
}
// interface MainPageProps {
//   state?: any;
// }
// { state }: MainPageProps
export default function MainPage() {
  const [playlists, setPlaylists] = useState<TPlaylist[]>([]);
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState('')

  const location = useLocation<LocationProps>()

  useEffect(() => {
    api.get('playlists')
      .then( response => setPlaylists(response.data));
    
      window.scrollTo(0,0) 
    return () => {
      
    }
  }, [])

  useEffect(() => {
    
    if(location.state) {
      setSuccess(location.state.success);
      setMessage(location.state.message);
    }

    window.history.replaceState({}, document.title)
  },[location])

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
          *Sujeito a termos e condições.
        </Button>
      </div>

      <div className="SubPage">
        <h1>É música que você quer?</h1>
        <p>Escute uma de nossas playlists gratuitas.</p>
        <Button gray noBg lg circle to="/register">
          OBTER SPOTIFY PREMIUM
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
