import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TextInput, Subheading, Button, HelperText } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { setUserAction } from "../store/User/UserActions";

const LogIn = (props) => {
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [error, setError] = React.useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice);

  const validateForm = (formData) => {
    if (!inputData.match(/[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/))
      Alert.alert("Error", "Email ID is invalid", ["OK"]);
  };
  

  const validateInput = (inputData, inputtype) => {
    if (inputtype == "email") setEmail(inputData.trim());

    if (inputtype == "pwd") setPwd(inputData.trim());
  };

  
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Subheading style={styles.subheading}>Log In</Subheading>
        <TextInput
          theme={{
            colors: { primary: "black" },
          }}
          mode={"outlined"}
          style={{ width: 250, margin: 5 }}
          label="Email"
          placeholder="Enter your Email address"
          value={email}
          onChangeText={(text) => validateInput(text, "email")}
          outlineColor="black"
        />
        <TextInput
          theme={{
            colors: { primary: "black" },
          }}
          placeholder="Enter your Password"
          mode={"outlined"}
          style={{ width: 250, margin: 5 }}
          label="Password"
          value={pwd}
          onChangeText={(text) => setPwd(text)}
          outlineColor="#000"
        />
        <HelperText type="error" visible={error}>
          {" "}
          Email ID is invalid
        </HelperText>
        <Button
          onPress={() => dispatch(setUserAction())}
          style={styles.button}
          mode="contained"
        >
          Let me In
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor:'red',
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    padding: 50,
    alignItems: "center",
    backgroundColor: "#ccf2f4",
    width: 350,
    height: 400,
    elevation: 30,
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
