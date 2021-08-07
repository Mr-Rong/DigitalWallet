import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { SignUp } from './Screens';


const theme = {
  ...DefaultTheme,
  colours:{
    ...DefaultTheme.colors,
    border: "transparent"
  }
}

const Stack = createStackNavigator()

const App = () => {
  return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          ScreenOptions={{
            headerShown: false
          }}
          initialRouteName={'SignUp'}
        >


          <Stack.Screen name="SignUp" component={SignUp}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}


