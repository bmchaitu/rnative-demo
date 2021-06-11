import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import InitScreen from "./screens/InitScreen";
import Battery from "./components/Battery";
import TaskManager from './components/TaskManager';
import Network from "./components/Network";
import Alarm from "./components/Alarm";
import { useKeepAwake } from 'expo-keep-awake';
import { Button } from "react-native-paper";
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert : true
    }
  }
})

export default function App() {
  useKeepAwake();
  const makeNotifications = async () => {
    await Notifications.scheduleNotificationAsync({
      content : {
        title : 'My notification',
        body : "Notification Body"
      },
      trigger : {
        seconds: 10
      }
    });
    console.log('Scheduled');
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Button onPress={makeNotifications}>Clickme</Button>
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
