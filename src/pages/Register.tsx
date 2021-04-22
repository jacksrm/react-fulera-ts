import { SyntheticEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../components/Button';
import ErrorBox from '../components/ErrorBox';
// import SuccessBox from '../components/SuccessBox';

import './Register.css';

export default function Form() {
  const history = useHistory()
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');

  const [errors, setErrors] = useState<JSX.Element[]>([]);

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setErrors([])

    const data = {
      email,
      confirmEmail,
      password,
      name,
      birth,
      gender,
    };

    setEmail('');
    setConfirmEmail('');
    setPassword('');
    setName('');
    setBirth('');
    setGender('');

    validateFields(data);
  }

  function validateFields(fields: TFormData ) {
    let errCount = 0
    
    Object.entries(fields).map(([key, val]) => {
      if (!val) {
        errCount++;
        setErrors((prev) => [
          ...prev,
          <ErrorBox key={prev.length}>
            → Campo {key} não pode ser vazio
          </ErrorBox>,
        ]);
      }

      return null;
    });

    if (fields.email !== fields.confirmEmail)
      errCount++;
      setErrors((prev) => [
        ...prev,
        <ErrorBox key={prev.length}>→ E-mails estão diferentes </ErrorBox>,
      ]);

    if(errCount === 0) {
      console.log('dasjdaskjdbaksdaksdb')
      history.push({
        pathname: '/',
        search: '',
        state: {
          success: true,
          message: 'Registrado com sucesso!'
        },
        
      })

      // setErrors([<SuccessBox>Conta criada com suesso!!!</SuccessBox>])
    }
  }

  return (
    <div className="Register">
      <h1>Inscrever-se com seu endereço de e-mail</h1>
      {errors.map((err) => err)}
      <form action="#" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          name="confirm-email"
          type="email"
          placeholder="Confirmar e-mail"
          onChange={(e) => setConfirmEmail(e.target.value)}
          value={confirmEmail}
        />

        <input
          name="password"
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <input
          name="name"
          type="text"
          placeholder="Como devemos lhe chamar"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label htmlFor="birth">Data de Nascimento</label>
        <input
          name="birth"
          type="date"
          placeholder="DD/MM/AAAA"
          onChange={(e) => setBirth(e.target.value)}
          value={birth}
        />

        <div className="radio-group">
          <input
            id="M"
            name="gender"
            type="radio"
            value="M"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="M">Masculino</label>
          <input
            id="F"
            name="gender"
            type="radio"
            value="F"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="F">Feminino</label>
          <input
            id="X"
            name="gender"
            type="radio"
            value="X"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="X">Não binário</label>
        </div>

        <Button tag="button" green md circle>
          Inscreva-se
        </Button>
      </form>
    </div>
  );
}
