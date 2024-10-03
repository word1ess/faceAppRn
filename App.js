import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Provider } from "react-redux";

import store from "./redux/store";

import CustomTextComponent from "./Components/Сommon/CustomTextComponent.jsx";
import Index from "./Components/Index";
import ScreenSecond from "./Components/ScreenSecond";
import ScreenThird from "./Components/ScreenThird";
import ScreenFourth from "./Components/ScreenFourth";
import ScreenFifth from "./Components/ScreenFifth";
import ScreenSixth from "./Components/ScreenSixth";
import ScreenSeventh from "./Components/ScreenSeventh";
import ScreenEighth from "./Components//ScreenEighth";
import ScreenNinth from "./Components/ScreenNinth";
import Plan from "./Components/Plan";
import Practice from "./Components/Practice";
import Progress from "./Components/Progress";
import Coach from "./Components/Coach";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const headerDriwer = {
  headerShown: true,
  headerTitle: () => null,
  headerStyle: {
    backgroundColor: "#2A3D55",
    height: 60,
  },
  drawerInactiveTintColor: "#90BDF3",
  drawerActiveTintColor: "#fff",
  drawerStyle: {
    backgroundColor: "#2A3D55",
  },
};
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="index" component={Index} />
          <Stack.Screen name="screen-2" component={ScreenSecond} />
          <Stack.Screen name="screen-3" component={ScreenThird} />
          <Stack.Screen name="screen-4" component={ScreenFourth} />
          <Stack.Screen name="screen-5" component={ScreenFifth} />
          <Stack.Screen name="screen-6" component={ScreenSixth} /> */}
          <Stack.Screen name="tabs" component={MyDrawer} />
          <Stack.Screen
            name="CustomTextComponent"
            component={CustomTextComponent}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function TabsScore() {
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
function TabsInfo() {
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
      <Tab.Screen name="Скан" component={Practice} />
      <Tab.Screen name="Прогресс" component={Progress} />
      <Tab.Screen name="Коуч" component={Coach} />
    </Tab.Navigator>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Статистика"
        component={TabsScore}
        options={headerDriwer}
      />
      <Drawer.Screen
        name="План улучшений"
        component={Plan}
        options={headerDriwer}
      />
      <Drawer.Screen
        name="Информация"
        component={TabsInfo}
        options={headerDriwer}
      />
    </Drawer.Navigator>
  );
}
