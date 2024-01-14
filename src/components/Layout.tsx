import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

import { Header } from './Header';

interface Props {
  children: React.ReactNode
  headerRoute: string[]
}

export const Layout = ({ children, headerRoute }: Props): JSX.Element => {
  const auth = useAuth();

  if (!auth.isAuthenticated) return <Navigate to="/" />;

  return (
    <>
      <Header route={headerRoute} />
      <div className="bg-gray-100 h-full">{children}</div>
    </>
  );
};
