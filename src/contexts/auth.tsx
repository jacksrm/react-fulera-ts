import { AxiosError, AxiosResponse } from 'axios';
import { createContext, HTMLAttributes, useEffect, useState } from 'react';

import { THandleError, TLoginData, TLoginResponse, TSession } from '../react-app-env';

import api from '../connections/api';

interface AuthProviderProps extends HTMLAttributes<HTMLOrSVGElement> {}

interface AuthProviderData {
  session: TSession
  signIn(user: TLoginData, callbackFn: THandleError): void //AxiosResponse<TLoginResponse>
  signOut(): void
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export function AuthProvider({ children }: AuthProviderProps ) {
  const [session, setSession] = useState<TSession>(
    JSON.parse(localStorage.getItem('session') || '{ "authenticated": false }') 
  )

  useEffect(() => {
    localStorage.setItem('session', JSON.stringify(session));
  }, [session])

  async function signIn(user: TLoginData, callbackFn: THandleError ) {

    try {
      const response: AxiosResponse<TLoginResponse> = await api.post('profile/login', user);
      setSession({ ...response.data, authenticated: true })
      
    } catch (error: any) {
      callbackFn(error)
    }
  }

  function signOut() {
    setSession({ authenticated: false } as TSession)
  }

  return (
    <AuthContext.Provider value={{ session, signIn, signOut }} >
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext;