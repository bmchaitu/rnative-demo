import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import * as NetworkAPI from "expo-network";
import { Title, Headline } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const Network = (props) => {
  const [IP, setIP] = React.useState({});
  const [MAC, setMAC] = React.useState({});
  const [planeMode, setPlaneMode] = React.useState({});
  const [network, setNetwork] = React.useState({});
  const getNetwork = async () => {
    setIP(String(await NetworkAPI.getIpAddressAsync()));
    setPlaneMode(
      String(await NetworkAPI.isAirplaneModeEnabledAsync()).toUpperCase()
    );
    setNetwork(await NetworkAPI.getNetworkStateAsync());
  };
  useEffect(() => {
    getNetwork();
  }, []);

  return (
    <View>
      <TouchableOpacity>
        <View style={styles.networkComponent}>
          <View style={styles.container}>
            <Headline style={styles.headline}>MOBILE NETWORK STATUS</Headline>
            <View style={styles.network_card}>
              <Title style={styles.header}>Network IP: {IP}</Title>
              <Title style={styles.header}>Is Plane Mode ON: {planeMode}</Title>
              <Title style={styles.header}>
                Connection Type: {String(network.type)}
              </Title>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  network_card: {
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
  networkComponent: {
    backgroundColor: "#867ae9",
    height: 280,
    borderRadius: 20,
    margin: 30,
  },
});

export default Network;
