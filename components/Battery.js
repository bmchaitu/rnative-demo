import React, { useCallback, useEffect } from "react";
import * as BatteryModule from "expo-battery";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Battery = (props) => {
  const [chrging, setChrging] = React.useState(false);
  const [pwr, setPwrMode] = React.useState(false);
  const [bstate,setBState] = React.useState('NO');

  const getBatteryLevel = useCallback(async (props) => {
    setChrging(await BatteryModule.getBatteryLevelAsync() * 100);
    setPwrMode(String(await BatteryModule.isLowPowerModeEnabledAsync()));
    let mode = String(await BatteryModule.getBatteryStateAsync());
    switch(mode){
      case "2" :
        setBState('CHARGING');
        break;
      case "1" : 
        setBState('CHARGER UNPLUGGED');
        break;
      case "3":
        setBState("Battery Full");
        break;
      default:
        setBState("STATE UN KNOWN");
    }
    

  });

  useEffect(() => {
    getBatteryLevel();
    const unsubscribe = BatteryModule.addLowPowerModeListener(async (power) => {
      let powerMode  = await BatteryModule.isLowPowerModeEnabledAsync();
    });
   return () => {
     unsubscribe.remove();
   } 
  }, [pwr, chrging]);

  return (
    <View>
      <ScrollView indicatorStyle="white" style={styles.container}>
        <TouchableOpacity>
          <View style={styles.battery_card}>
            <Text>Battery Level: {chrging.toFixed(2)}%</Text>
            <Text>Power Mode Enabled: {pwr}</Text>
            <Text>Is Chargger Plugged: {bstate}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.battery_card}>
            <Text>${BatteryModule.BatteryState.CHARGING}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.battery_card}>
            <Text>Battery</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.battery_card}>
            <Text>Battery</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.battery_card}>
            <Text>Battery</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.battery_card}>
            <Text>Battery</Text>
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
    marginTop: 35,
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
});
export default Battery;
