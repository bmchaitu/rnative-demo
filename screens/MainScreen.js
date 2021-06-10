import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import RootNavigator from "../Navigator/RootNavigator";

const MainScreen = (props) => {
  const user = useSelector((state) => state.userSlice);
  return (
    <RootNavigator/>
  );
};
const styles = StyleSheet.create({
  screen: { flex: 1, width: 300, height: "100%" },
});

export default MainScreen;
