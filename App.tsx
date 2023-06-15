/* eslint-disable react/react-in-jsx-scope */
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {PreJoinScreen} from './src/screens/PreJoinScreen/PreJoinScreen';
import {RoomScreen} from './src/screens/RoomScreen/RoomScreen';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen name="PreJoinPage" component={PreJoinScreen} />
          <Stack.Screen name="RoomPage" component={RoomScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}

export type RootStackParamList = {
  PreJoinPage: undefined;
  RoomPage: {url?: string; token: string};
};
