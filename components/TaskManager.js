import React from "react";
import * as TaskManagerAPI from "expo-task-manager";
import { Button } from "react-native-paper";
import {View, Text} from 'react-native';

const TaskManager = (props) => {
  const [state, setState] = React.useState(null);

  const handleClick = async () => {
    const obj = await TaskManagerAPI.getRegisteredTasksAsync();
    setState(obj);
  };
  console.log(state);
  return (
    <View>
      <Text>Hello</Text>
      <Button onPress={handleClick}>Click me</Button>
    </View>
  );
};

export default TaskManager;
