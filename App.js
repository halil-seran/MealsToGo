import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to s tart working on your app!</Text>
      <ExpoStatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: StatusBar.currentHeight,
  },
});
