import { useState, createContext, useContext } from 'react';

interface Props {
  children: React.ReactNode
}

interface AuthContextType {
  isAuthenticated: boolean
  saveUser: (userData: string) => void
  clearUser: () => void
}

const AuthContext = createContext({
  isAuthenticated: false,
  saveUser: (userData: string) => {},
  clearUser: () => {}
});

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function saveUser (userData: string): void {
    localStorage.setItem('username', userData);
    setIsAuthenticated(true);
  }

  function clearUser (): void {
    localStorage.removeItem('username');
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, saveUser, clearUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => useContext(AuthContext);
