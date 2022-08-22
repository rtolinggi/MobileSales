import React from 'react';
import {AuthProvider} from './src/context/AuthContext';
import NavStack from './src/navigations/NavStack';

export default function App() {
  return (
    <AuthProvider>
      <NavStack />
    </AuthProvider>
  );
}
