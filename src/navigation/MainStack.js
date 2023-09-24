import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigation from "./BottomNavigation";
import OnboardingScreen from "../screens/OnboardingScreen";
import { ScreenNames } from "../utils/Constants";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.ONBOARDING_SCREEN}
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNames.BOTTOM_NAV}
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
