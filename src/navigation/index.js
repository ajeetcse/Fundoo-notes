import React from 'react';
import AuthProvider from './AuthProvider';

import Routes from './Routes';
//import { NavigationContainer } from '@react-navigation/native';

const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
export default Providers;
