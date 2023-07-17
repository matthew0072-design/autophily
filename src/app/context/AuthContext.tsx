import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged,  getAuth } from 'firebase/auth';
import Spinner from '../components/spinner';
import { auth } from '../firebase/config';



interface AuthContextProps {
  user: any;
}

export const AuthContext = createContext<AuthContextProps>({ user: null });

export const useAuthContext = (): AuthContextProps => useContext(AuthContext);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps): JSX.Element => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);  
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{  user }}>
      {loading ? <Spinner />  : children}
    </AuthContext.Provider>
  );
};
