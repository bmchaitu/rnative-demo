import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogIn from "../screens/LogIn";

const RootNavigator = (props) => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={StyleSheet.screen}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={LogIn} />
          <Tab.Screen name="Settings" component={LogIn} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'red'
    }
})
export default RootNavigator;
