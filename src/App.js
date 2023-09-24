import "react-native-gesture-handler";
import MainStack from "./navigation/MainStack";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./utils/MainNavigation";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
}
