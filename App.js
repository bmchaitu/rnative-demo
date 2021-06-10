import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import InitScreen from "./screens/InitScreen";
import Battery from "./components/Battery";


export default function App() {
  
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Battery/>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
