import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './screens/OnboardingScreen';
import Duolingo from './screens/Duolingo';

const Stack = createStackNavigator();

export default function App() {

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="onboarding" component={OnboardingScreen} options={{headerShown: false}}/>
      <Stack.Screen name='duolingo' component={Duolingo} options={{headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
