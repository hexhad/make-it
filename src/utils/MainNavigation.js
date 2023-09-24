import { CommonActions, createNavigationContainerRef, StackActions } from "@react-navigation/native";

/**
 * REFERENCE : https://reactnavigation.org/docs/2.x/stack-actions/
 * */
export const navigationRef = createNavigationContainerRef();
const navigate = (path, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(path, params);
  }
};

const pop = (count = 1) => {
  if (navigationRef.isReady()) {
    const stAction = StackActions.pop(count);
    navigationRef.dispatch(stAction);
  }
};

const goBack = () => {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
};

const restStack = (routes) => {
  /**
   * [{ name: ScreenNames.ONBOARDING_SCREEN }]
   * */
  if (navigationRef.isReady()) {
    const resetAction = CommonActions.reset({
      index: 1,
      routes,
    });
    navigationRef.dispatch(resetAction);
  }
};

export const nav = {
  navigate,
  goBack,
  pop,
  restStack,
};

