import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/bottomNavigation/HomeScreen";
import SettingsScreen from "../screens/bottomNavigation/SettingsScreen";
import { ScreenNames } from "../utils/Constants";
import { Bookmark, Coffee, Hexagon } from "react-native-feather";
import ScreenTwo from "../screens/bottomNavigation/ScreenTwo";

export default () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ScreenNames.HOME_SCREEN}
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          headerShown: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Coffee
              stroke={focused ? "#000" : "#808080"}
              width={20}
              height={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.EXTRA_SCREEN}
        component={ScreenTwo}
        options={{
          headerTitleAlign: "center",
          headerShown: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Bookmark
              stroke={focused ? "#000" : "#808080"}
              width={20}
              height={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{
          headerTitleAlign: "center",
          headerShown: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Hexagon
              stroke={focused ? "#000" : "#808080"}
              width={20}
              height={20}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
}
