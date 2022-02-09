import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useFonts as useOswald, Oswald_400Regular, } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular, } from '@expo-google-fonts/lato';
import { theme } from './src/infrastructure/theme';
import Navigation from './src/infrastructure/navigation';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig  = {
  apiKey: "AIzaSyCMKrEI2PEkYYJFBlmGm9MHKI9gLE2kzyQ",
  authDomain: "mealstogo-48127.firebaseapp.com",
  projectId: "mealstogo-48127",
  storageBucket: "mealstogo-48127.appspot.com",
  messagingSenderId: "751829389986",
  appId: "1:751829389986:web:2054a15367c12918a6fdfb"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if( !oswaldLoaded || !latoLoaded ){
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
              <Navigation />
          </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}