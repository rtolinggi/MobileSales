import React, {type PropsWithChildren, createContext, useState} from 'react';

type Auth = {
  userToken: string | null;
  isLoading: boolean;
  login?: (data: PostLogin) => void;
  logout?: () => void;
};

const initialState = {
  userToken: null,
  isLoading: false,
};

type PostLogin = {
  email: string;
  passwordHash: string;
};

export const AuthContext = createContext<Auth>(initialState);

export const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [isLoading, setIsLoading] = useState<boolean>(initialState.isLoading);
  const [userToken, setUserToken] = useState<string | null>(
    initialState.userToken,
  );

  const login = async (data: PostLogin) => {
    try {
      setIsLoading(true);
      const postLogin = await fetch('http://192.168.43.25:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await postLogin.json();
      if (!result.success) {
        console.log(result);
        setUserToken(null);
      }
      setUserToken(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log(userToken);
      setIsLoading(false);
    }
  };

  const logout = () => {
    setIsLoading(initialState.isLoading);
    setUserToken(initialState.userToken);
  };

  return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};
