import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Provider } from "react-redux";

import Index from "./Components/Index";
import ScreenSecond from "./Components/ScreenSecond";
import ScreenThird from "./Components/ScreenThird";
import ScreenFourth from "./Components/ScreenFourth";
import ScreenFifth from "./Components/ScreenFifth";
import ScreenSixth from "./Components/ScreenSixth";
import ScreenSeventh from "./Components/ScreenSeventh";
import ScreenEighth from "./Components//ScreenEighth";

import store from "./redux/store";
import ScreenNinth from "./Components/ScreenNinth";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" component={Index} />
          <Stack.Screen name="screen-2" component={ScreenSecond} />
          <Stack.Screen name="screen-3" component={ScreenThird} />
          <Stack.Screen name="screen-4" component={ScreenFourth} />
          <Stack.Screen name="screen-5" component={ScreenFifth} />
          <Stack.Screen name="screen-6" component={ScreenSixth} />
          <Stack.Screen name="tabs" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarActiveTintColor: "#90BDF3",
        tabBarStyle: {
          backgroundColor: "#2A3D55",
          borderBottomWidth: 0,
        },
      }}
    >
      <Tab.Screen name="Рейтинг" component={ScreenSeventh} />
      <Tab.Screen name="Анализ" component={ScreenEighth} />
      <Tab.Screen name="Топ" component={ScreenNinth} />
    </Tab.Navigator>
  );
}
