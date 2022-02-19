import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import * as firebase from "firebase";

import {
  useFonts as useOswald,
  Oswald_500Medium,
  Oswald_300Light,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyAC8n5hNk4kS6UAPv8VVvKSi_PRW6rILXM",
  authDomain: "mealstogo-db858.firebaseapp.com",
  projectId: "mealstogo-db858",
  storageBucket: "mealstogo-db858.appspot.com",
  messagingSenderId: "791881679090",
  appId: "1:791881679090:web:9e1fb690d88a930087d06b",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_500Medium,
    Oswald_300Light,
  }); 
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
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

//import firebase from "firebase/compat/app";
//import "firebase/compat/firestore";
