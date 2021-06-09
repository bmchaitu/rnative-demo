import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { TextInput, Subheading, Button, HelperText } from "react-native-paper";

const LogIn = (props) => {
  const [email, setEmail] = React.useState("");
  const [pwd,setPwd] = React.useState("");

  const validateForm = (formData) => {

  };

  const validateInput = (inputData) => {

  }

  const hasErrors = () => {
    return email.charAt(0) == 'a';
  };
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Subheading style={styles.subheading}>Log In</Subheading>
        <TextInput
          theme={{
            colors: { primary: "black"},
          }}
          mode={"outlined"}
          style={{ height: 50, width: 250, margin:5 }}
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          outlineColor="black"
        />
        <TextInput
          theme={{
            colors: { primary: "black"},
          }}
          mode={"outlined"}
          style={{ height: 50, width: 250, margin:5}}
          label="Password"
          value={pwd}
          onChangeText={(text) => setPwd(text)}
          outlineColor="#000"
          dense={true}
        />
        <HelperText type="error" visible={hasErrors()}> Email ID is invalid</HelperText>
        <Button style={styles.button} mode="contained">
          Let me In
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    padding: 50,
    alignItems: "center",
    backgroundColor: "#ccf2f4",
    width: 350,
    height: 400,
    borderColor: "black",
    borderRadius: 40,
    overflow: "hidden",
  },
  input: {
    margin: 25,
  },
  subheading: {
    fontSize: 25,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#2940d3",
    marginTop: 20,
  },
});
export default LogIn;
