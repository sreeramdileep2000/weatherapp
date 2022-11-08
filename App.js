import HomeScreen from "./components/HomeScreen"
import SecondScreen from "./components/SecondScreen";
import ThirdScreen from "./components/ThirdScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: "TCSWeather", headerTitleAlign: "center",  headerTintColor: 'white', headerStyle: {
            backgroundColor: '#283964'
         }}}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{title: "Page 2", headerTitleAlign: "center"}}
        />
        <Stack.Screen
          name="Third"
          component={ThirdScreen}
          options={{title: "Page 3", headerTitleAlign: "center"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

