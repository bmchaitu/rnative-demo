import React from 'react';
import MainScreen from './MainScreen';
import LogIn from './LogIn';
import {useSelector} from 'react-redux';
import { View } from 'react-native';


const InitScreen = props => {
    const user = useSelector(state => state.userSlice);
    return (
       <View>
           {user.user === "" ? <LogIn/> : <MainScreen/>}
       </View>
    )
}

export default InitScreen;