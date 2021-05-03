import { SyntheticEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../components/Button';
import ErrorBox from '../components/ErrorBox';

import api from '../connection/api';

import './Register.css';

export default function Form() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const [errors, setErrors] = useState<JSX.Element[]>([]);

  async function handleLogin(e: SyntheticEvent) {
    e.preventDefault();

  }

  return (
    <div className="Register">
      <h1>Faça login</h1>
      {errors.map((err) => err)}
      <form action="#" onSubmit={handleLogin}>
        <input
          autoFocus
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          name="password"
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <Button tag="button" green md circle >
          Entrar
        </Button>
      </form>
    </div>
  );
}
