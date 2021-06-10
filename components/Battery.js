import React, { useCallback, useEffect } from "react";
import * as BatteryModule from "expo-battery";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Title, Headline } from "react-native-paper";

const Battery = (props) => {
  const [chrging, setChrging] = React.useState(false);
  const [pwr, setPwrMode] = React.useState(false);
  const [bstate, setBState] = React.useState("NO");

  const getBatteryLevel = useCallback(async (props) => {
    setChrging(
      ((await BatteryModule.getBatteryLevelAsync()) * 100).toPrecision(9)
    );
    setPwrMode(
      String(await BatteryModule.isLowPowerModeEnabledAsync()).toUpperCase()
    );
    let mode = String(await BatteryModule.getBatteryStateAsync());
    switch (mode) {
      case "2":
        setBState("CHARGING");
        break;
      case "1":
        setBState("CHARGER UNPLUGGED");
        break;
      case "3":
        setBState("BATTERY FULL");
        break;
      default:
        setBState("STATE UNKNOWN");
    }

    if (chrging == 100 && bstate == "CHARGING")
      console.log("Buttaery Full Take off the Charger");

    if (chrging <= 20 && bstate != "CHARGING")
      console.log(
        "Battery is Low Please charge your Mobile or Turn on the Power mode"
      );
  });

  useEffect(() => {
    getBatteryLevel();
    const unsubscribe1 = BatteryModule.addBatteryLevelListener(getBatteryLevel);
    const unsubscribe2 = BatteryModule.addBatteryStateListener(getBatteryLevel);
    const unsubscribe3 = BatteryModule.addLowPowerModeListener(getBatteryLevel);
    return () => {
      unsubscribe1.remove();
      unsubscribe2.remove();
      unsubscribe3.remove();
    };
  }, [props]);

  return (
    <View style={styles.batteryComponent}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        indicatorStyle="white"
        style={styles.container}
      >
        <Headline style={styles.headline}>MOBILE BATTERY STATUS</Headline>
        <TouchableOpacity>
          <View style={styles.battery_card}>
            <Title style={styles.header}>Battery Level: {chrging}%</Title>
            <Title style={styles.header}>Power Mode Enabled: {pwr}</Title>
            <Title style={styles.header}>Is PluggedIn: {bstate}</Title>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
    textAlign: "center",
  },
  battery_card: {
    width: 350,
    height: 150,
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: "#8be3e1",
  },
  header: {
    fontSize: 16,
  },
  headline: {
    fontWeight: "bold",
  },
  batteryComponent: {
    backgroundColor: "#867ae9",
    height: 280,
    borderRadius: 20,
  },
});
export default Battery;
